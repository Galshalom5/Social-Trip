import React, { useState, Fragment, useRef, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBCardGroup,
  MDBInput,
  MDBIcon,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCloseIcon,
} from "mdbreact";
import Style from "../css/CardStyle.module.css";
import "../css/CardsD.css";
import { db } from "../index";

const EventsCreator = (state) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const [data, setdata] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    school: "",
    curriculum: "",
    why: "",
    age: "",
    expectaions: "",
    vehicle: "",
    tremp: "",
    availbleSeats: "0",
    eventName: "",
  });
  const [errData, seterrData] = useState({
    errName: "חובה להזין שם",
    errLastName: "חובה להזין שם משפחה",
    errPhoneNumber: "חובה להזין מספר טלפון",
    errEmail: "חובה להזין כתובת אימייל",
    errExpectaions: "חובה להזין ציפיות למסע",
    errAge: "חובה להזין גיל",
  });

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const desRef = useRef(null);
  const dateRef = useRef(null);
  const audRef = useRef(null);
  const isPrev = useRef(null); //  new!!
  const selectRef = useRef(null);

  const sendInfoHandler = (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("was-validated"))
      event.target.classList.add("was-validated");
    if (event.target.checkValidity()) {
      db.collection("wantsToSignin")
        .doc(`${data.name + " " + data.lastName}`)
        .set(data)
        .then(() => {
          alert(
            "תודה על הרצון להיות חלק ממסע היכרות עם קבוצות שונות בחברה הישראלית. פרטייך נקלטו במערכת, נציגי מסע חברתי יצרו איתך קשר בקרוב. המשך יום טוב !"
          );
        });
      setRegister(false);
    }
  };

  function CreateCard(item) {
    titleRef.current = item.title;
    desRef.current = item.fullDesc;
    dateRef.current = item.date;
    imageRef.current = item.imageUrl;

    audRef.current = "קהל יעד : " + item.audience; /// new!!!!!!
    isPrev.current = item.isPrev;

    setModalIsOpen(true);
  }

  function SignModal(title) {
    setdata({ ...data, eventName: title });
    setModalIsOpen(false);
    setRegister(true);
  }

  const initialSize = (event) => {
    if (event.target.classList.contains("textAreaMaxHeight"))
      event.target.classList.remove("textAreaMaxHeight");
    if (!event.target.classList.contains("initialSize"))
      event.target.classList += " initialSize";
  };

  const textAreaMaxHeight = (event) => {
    if (event.target.classList.contains("initialSize"))
      event.target.classList.remove("initialSize");
    if (!event.target.classList.contains("textAreaMaxHeight"))
      event.target.classList += " textAreaMaxHeight ";
  };

  const trempCheckBoxHandler = (event) => {
    if (event.target.checked) {
      setdata({ ...data, tremp: "כן" });
    } else {
      setdata({ ...data, tremp: "לא" });
    }
  };

  const vehicleCheckBoxHander = (event) => {
    if (event.target.checked) {
      setdata({ ...data, vehicle: "כן" });
    } else {
      setdata({ ...data, vehicle: "לא" });
    }
  };

  const cards = state.eventsArr.map((item, index) => {
    const aud = "קהל יעד : " + item.audience; // new!!!!!!!
    return (
      <MDBCol key={index} md="4" style={{ display: "inline-block" }}>
        <MDBCard key={index} style={{ height: "58vh" }} className="mb-4">
          <MDBCardImage
            top
            src={item.imageUrl}
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
            style={{ height: "23vh" }}
          />
          <MDBCardBody>
            <MDBCardTitle className="text-right">{item.title}</MDBCardTitle>
            <hr />
            <MDBCardText className="text-right"> {aud} </MDBCardText>
            <MDBCardText className="text-right">{item.description}</MDBCardText>
          </MDBCardBody>
          <MDBBtn
            className={Style.btn}
            id={item.title}
            color="rgba(62, 69, 81, 0.3) rgba-stylish-light"
            onClick={() => CreateCard(item)}
          >
            קרא/י עוד
          </MDBBtn>
        </MDBCard>
      </MDBCol>
    );
  });

  return (
    <MDBContainer>
      <MDBCardGroup dir="rtl">{cards}</MDBCardGroup>
      <MDBModal
        isOpen={modalIsOpen}
        toggle={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        <MDBRow>
          <MDBCol style={{ maxWidth: "60rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                top
                cascade
                style={{ height: "30vh" }}
                src={imageRef.current}
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle> {titleRef.current} </MDBCardTitle>
                <h5>
                  <strong>{dateRef.current}</strong>
                </h5>
                <MDBCardText className="text-right">
                  {audRef.current}
                </MDBCardText>
                <MDBCardText className="text-right" dir="rtl">
                  {desRef.current}
                </MDBCardText>
                <Fragment>
                  {!isPrev.current ? (
                    <MDBBtn
                      color="rgba(62, 69, 81, 0.3) rgba-stylish-light"
                      onClick={() => SignModal(titleRef.current)}
                    >
                      הירשם
                    </MDBBtn>
                  ) : null}
                </Fragment>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBModal>
      <MDBModal
        size="lg"
        isOpen={register}
        toggle={() => setRegister(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
        }}
      >
        <h2 style={{ color: "black" }}>הרשמה למסע</h2>
        <h3 style={{ color: "black" }}>{titleRef.current}</h3>
        <h4 style={{ color: "black" }}> {dateRef.current}</h4>
        <MDBModalBody className="justify-content-end mr-4">
          <MDBRow>
            <MDBCol>
              <form
                className="needs-validation"
                noValidate
                onSubmit={sendInfoHandler}
              >
                <div className="grey-text text-right  ">
                  <MDBInput
                    required
                    icon="user"
                    type="text"
                    labelClass="col text-right ml-0"
                    label="שם"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, name: e })}
                  >
                    <div className="invalid-feedback">{errData.errName}</div>
                  </MDBInput>
                  <MDBInput
                    required
                    icon="fa fa-id-card"
                    type="text"
                    labelClass="col text-right ml-0"
                    label="שם משפחה"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, lastName: e })}
                  >
                    <div className="invalid-feedback">
                      {errData.errLastName}
                    </div>
                  </MDBInput>
                  <MDBInput
                    required
                    icon="fa fa-phone"
                    type="number"
                    labelClass="col text-right ml-0"
                    label="פלאפון"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, phoneNumber: e })}
                  >
                    <div className="invalid-feedback">
                      {errData.errPhoneNumber}
                    </div>
                  </MDBInput>
                  <MDBInput
                    required
                    icon="fa fa-user-plus"
                    type="number"
                    labelClass="col text-right ml-0"
                    label="גיל"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, age: e })}
                  >
                    <div className="invalid-feedback">{errData.errAge}</div>
                  </MDBInput>
                  <MDBInput
                    required
                    icon="envelope"
                    type="email"
                    labelClass="col text-right ml-0"
                    label="מייל"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, email: e })}
                  >
                    <div className="invalid-feedback">{errData.errEmail}</div>
                  </MDBInput>
                  <MDBInput
                    icon="fa fa-building"
                    type="text"
                    labelClass="col text-right ml-0"
                    label="כתובת"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, address: e })}
                  ></MDBInput>
                  <MDBInput
                    icon="fa fa-graduation-cap"
                    type="text"
                    labelClass="col text-right ml-0"
                    label="מוסד לימודים"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, school: e })}
                  ></MDBInput>
                  <MDBInput
                    icon="fa fa-graduation-cap"
                    type="text"
                    labelClass="col text-right ml-0"
                    label="מסלול לימודים"
                    className="col text-right"
                    getValue={(e) => setdata({ ...data, curriculum: e })}
                  ></MDBInput>
                  <MDBInput
                    icon="tag"
                    type="textarea"
                    rows="2"
                    labelClass="col text-right ml-0"
                    label="מדוע אתה מעוניין להשתתף במסע"
                    className="col text-right textAreaMaxHeight"
                    onFocus={textAreaMaxHeight}
                    onBlur={initialSize}
                    getValue={(e) => setdata({ ...data, why: e })}
                  ></MDBInput>
                  <MDBInput
                    required
                    icon="pencil-alt"
                    type="textarea"
                    rows="2"
                    labelClass="col text-right ml-0"
                    label="מה הציפיות שלך ממסע שכזה?"
                    className="col text-right textAreaMaxHeight"
                    onFocus={textAreaMaxHeight}
                    onBlur={initialSize}
                    getValue={(e) => setdata({ ...data, expectaions: e })}
                  >
                    <div className="invalid-feedback">
                      {errData.errExpectaions}
                    </div>
                  </MDBInput>
                </div>

                <MDBRow className="justify-content-end">
                  <div dir="rtl" className="text-right">
                    <div className="custom-control custom-checkbox custom-control-inline">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="defaultInline1"
                        onChange={vehicleCheckBoxHander}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultInline1"
                      >
                        מגיע עם רכב
                      </label>
                    </div>

                    <div className="custom-control custom-checkbox custom-control-inline">
                      <input
                        disabled={data.vehicle === "כן" ? false : true}
                        type="checkbox"
                        className="custom-control-input text-right"
                        id="defaultInline2"
                        onChange={trempCheckBoxHandler}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="defaultInline2"
                      >
                        האם תהיה מעוניין לקחת טרמפ משתתפים אחרים?
                      </label>
                    </div>

                    <div className="custom-control custom-checkbox custom-control-inline">
                      <select
                        disabled={data.tremp === "כן" ? false : true}
                        required
                        className="browser-default custom-select"
                        onChange={(e) => (
                          setdata({ ...data, availbleSeats: e.target.value }),
                          (selectRef.current = e.target)
                        )}
                      >
                        <option value="">מספר מקומות פנויים</option>
                        <option value="1"> 1</option>
                        <option value="2"> 2</option>
                        <option value="3"> 3</option>
                        <option value="4"> 4</option>
                      </select>
                    </div>
                  </div>
                </MDBRow>
                <MDBModalFooter className="justify-content-center ml-5 mt-1">
                  <div className="text-center">
                    <MDBBtn outline type="submit" color="secondary">
                      שלח
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                    <MDBBtn
                      onClick={() => setRegister(false)}
                      outline
                      color="danger"
                    >
                      ביטול
                      <MDBIcon icon="times" className="ml-1" />
                    </MDBBtn>
                  </div>
                </MDBModalFooter>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default EventsCreator;
