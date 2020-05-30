import React, { useState, Fragment } from "react";
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
  MDBIcon,
} from "mdbreact";
import Style from "./CardStyle.module.css";
// import CardModal from './CardModal'
import Modal from "react-modal";

const EventsCreator = (state) => {
  const { eventsArr } = state;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function CreateCard(item) {
    setModalIsOpen(true);
    console.log(this);
  }

  const cards = state.eventsArr.map((item, index) => {
    return (
      <MDBCol md="4" style={{ display: "inline-block" }}>
        <MDBCard style={{ height: "30rem" }}>
          <MDBCardImage
            top
            src={item.imageUrl}
            overlay="white-slight"
            hover
            waves
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle className="text-right">{item.title}</MDBCardTitle>
            <hr />
            <MDBCardText className="text-right">{item.description}</MDBCardText>
          </MDBCardBody>
          <MDBBtn
            className={Style.btn}
            id={item.title}
            gradient="juicy-peach"
            onClick={CreateCard}
          >
            קרא/י עוד
          </MDBBtn>
        </MDBCard>
      </MDBCol>
    );
  });

  return (
    <MDBContainer>
      {cards}
      <Modal
        id="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.4)",
          },
          content: {
            color: "orange",
            width: "50%",
            left: "25%",
          },
        }}
      >
        <h5>Modal</h5>
        <MDBRow>
          <MDBCol style={{ maxWidth: "60rem" }}>
            <MDBCard reverse>
              <MDBCardImage
                cascade
                style={{ height: "28rem" }}
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
              />
              <MDBCardBody cascade className="text-center">
                <MDBCardTitle> {state.title} </MDBCardTitle>
                <h5 className="indigo-text">
                  <strong>Date</strong>
                </h5>
                <MDBCardText className="text-right">description</MDBCardText>
                <Fragment>
                  <MDBBtn gradient="peach">הירשם</MDBBtn>
                </Fragment>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Modal>
    </MDBContainer>
  );
};

export default EventsCreator;
