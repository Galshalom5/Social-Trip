import React, { useState, useEffect, useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { auth } from "../index";
import { withRouter } from "react-router-dom";
import "../css/AdminLogin.css";
const AdminLogin = ({ history }) => {
  const passref = useRef(null);
  const emailref = useRef(null);
  const [firebaseinItialized, setFirebaseInitialize] = useState(false);
  const [passValidate, setpassValidate] = useState("סיסמא שגויה");
  const [emailValidate, setemailValidate] = useState("משתמש אינו רשום");

  useEffect(() => {
    function isinit() {
      return new Promise(() => {
        auth.onAuthStateChanged((resolve) => {
          return resolve;
        });
      });
    }
    isinit().then((val) => {
      setFirebaseInitialize(val);
    });
  }, []);

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  async function login(event) {
    event.preventDefault();
    await auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        if (emailref.current.classList.contains("is-invalid"))
          emailref.current.classList.remove("is-invalid");
        if (passref.current.classList.contains("is-invalid"))
          passref.current.classList.remove("is-invalid");
        emailref.current.classList += " is-valid";
        passref.current.classList += " is-valid";
        history.replace("/AdminRoute");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/invalid-email") {
          if (!emailref.current.classList.contains(" is-invalid"))
            emailref.current.classList += " is-invalid";
        } else if (errorCode === "auth/wrong-password") {
          emailref.current.classList.remove("is-invalid");
          if (!passref.current.classList.contains(" is-invalid"))
            passref.current.classList += " is-invalid";
        } else alert("עקב תקלה אנא נסה במועד מאוחר יותר");
        console.log("err msg = ", errorMessage, "err code = ", errorCode);

        // ...
      });
  }

  return !firebaseinItialized ? (
    <MDBContainer className="" style={{ height: "100vh" }}>
      <MDBRow className="d-flex flex-row justify-content-center h-100">
        <MDBCol
          md="6"
          className="d-flex flex-column d-flex justify-content-center h-75 text-right"
        >
          <form className="needs-validation myDiv" noValidate onSubmit={login}>
            <p className="h5 text-center mb-4">כניסת למערכת</p>
            <div className="myDiv">
              <MDBInput
                inputRef={(ref) => (emailref.current = ref)}
                label="אימייל"
                labelClass="text-white col text-right"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="text-white text-right"
                iconClass="mx-1"
                required
              >
                <div className="invalid-feedback">{emailValidate}</div>
              </MDBInput>
              <MDBInput
                inputRef={(ref) => (passref.current = ref)}
                label="סיסמא"
                icon="lock"
                group
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                className="text-white text-right"
                labelClass="col text-right"
                iconClass="mx-1"
                required
              >
                <div className="invalid-feedback">{passValidate}</div>
              </MDBInput>
            </div>
            <div className="text-center">
              <MDBBtn type="submit">כניסה</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  ) : (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol className="justify-content-center">
          <i class="fas fa-spinner fa-spin"></i>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default withRouter(AdminLogin);
