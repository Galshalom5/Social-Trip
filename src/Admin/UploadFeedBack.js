import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import "../css/UploadEvent.css";
import { db } from "../index";
import "../css/Admin.css";

class UploadFeedBack extends Component {

  state = {
    modal16: false,
    FeedBackName: "",
    FeedBackTxt: "",
    isActive1: false,
    isActive2: false,
  };

  clickHandler = async (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("was-validated"))
      event.target.className += " was-validated";
    if (event.target.checkValidity()) {
      var promise = new Promise((resolve) => {
        let modalNumber = "modal" + 16;
        this.addFeedBackHandler();
        this.setState({
          ...this.state,
          [modalNumber]: !this.state[modalNumber],
        });
      });
    }
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  addFeedBackHandler = () => {
    db.collection("FeedBack")
      .add({
        name: this.state.FeedBackName,
        feedBackTxt: this.state.FeedBackTxt,
      })
      .then((snapshot) => {
        console.log("FeedBack added to firebase");
        alert("התווסף פידבק חדש");
        this.props.value(0);
      })
      .catch((err) => {
        console.log("err add to fireBase", err);
        alert("feedBack was not added to firebase please try again");
      });
  };

  render() {
    const { modalIsOpen } = this.props;
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(16)} rounded outline color="success">
          הוסף פידבק
        </MDBBtn>
        <MDBModal
          position="left-top"
          isOpen={this.state.modal16}
          toggle={this.toggle(16)}
        >
          <MDBModalHeader toggle={this.toggle(16)} dir="rtl">
            הוסף פידבק
          </MDBModalHeader>
          <form
            className="needs-validation"
            noValidate
            onSubmit={this.clickHandler}
          >
            <MDBModalBody style={{ maxHeight: "75vh" }}>
              <MDBInput
                required
                type="text"
                dir = "rtl"
                maxLength="24"
                labelClass={`col text-right `}
                className="col text-right"
                label="שם הכותב"
                getValue={(e) =>
                  this.setState({ ...this.state, FeedBackName: e })
                }
              >
                <div className="invalid-feedback">חובה להכניס תוכן</div>
              </MDBInput>
              <MDBInput
                required
                dir = "rtl"
                maxLength="90"
                type="textarea"
                labelClass="col text-right"
                label="תוכן הפידבק"
                className={`col text-right maxHeight ${
                  this.state.isActive2 ? "isActive" : ""
                }`}
                getValue={(e) =>
                  this.setState({ ...this.state, FeedBackTxt: e })
                }
                onFocus={() =>
                  this.setState({
                    ...this.state,
                    isActive1: true,
                    isActive2: false,
                  })
                }
              >
                <div className="invalid-feedback">חובה להכניס תוכן</div>
              </MDBInput>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(16)}>
                ביטול
              </MDBBtn>
              <MDBBtn type="submit" color="primary">
                הוסף פידבק
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default UploadFeedBack;
