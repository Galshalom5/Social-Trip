import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { auth } from '../index'
import { withRouter } from 'react-router-dom'
const AdminLogin = ({ history }) => {





  
  const [firebaseinItialized, setFirebaseInitialize] = useState(false)

  useEffect(() => {
    function isinit() {
      return new Promise(() => {
        auth.onAuthStateChanged(resolve => {
          return resolve
        })
      })
    }
    isinit().then(val => {
      setFirebaseInitialize(val)
    })
  },[])


  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  async function login() {
    await auth.signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.replace('/AdminRoute')
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('err msg = ', errorMessage)
        // ...
      })
  }

  return !firebaseinItialized ? (

    <MDBContainer className="" style={{ height: '100vh' }}>
      <MDBRow className="d-flex flex-row justify-content-center h-100">
        <MDBCol md="6" className="d-flex flex-column d-flex justify-content-center h-75">
          <form >
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                success="right" value={email} onChange={e => setemail(e.target.value)} />
              <MDBInput label="Type your password" icon="lock" group type="password" validate value={pass} onChange={e => setpass(e.target.value)} />
            </div>
            <div className="text-center">
              <MDBBtn onClick={login}>Login</MDBBtn>
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
    )
}

export default withRouter(AdminLogin)