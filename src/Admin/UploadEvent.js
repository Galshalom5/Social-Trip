import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBRow,
} from "mdbreact";
import "../css/UploadEvent.css";
import { storage, db } from "../index";
import "../css/Admin.css";

class UploadEvent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modal16: false,
    eventName: "",
    filePath: "",
    date: "",
    audiance: "",
    shortDescription: "",
    fullDescription: "",
    isActive1: false,
    isActive2: false,
    photoPath: "בחר תמונה",
  };

  imageHandler = (event) => {
    const imageFile = event.target.files[0];
    if (event.target.files[0] !== undefined) {
      if (event.target.files[0].name.match(/.(jpg|jpeg|png|gif)/i)) {
        let imageRef = storage
          .ref()
          .child(`eventsImages/${event.target.files[0].name}`)
          .getDownloadURL()
          .then(() => {
            alert("התמונה קיימת כבר במערכת אנא בחר תמונה שלא קיימת במערכת");
          })
          .catch((err) => {
            this.setState({ filePath: imageFile });
            this.setState({ photoPath: imageFile.name });
          });
      } else alert("אנא בחר תמונה");
    } else this.setState({ photoPath: "בחר תמונה" });
  };

  clickHandler = async (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("was-validated"))
      event.target.className += " was-validated";
    if (event.target.checkValidity()) {
      var promise = new Promise((resolve) => {
        let modalNumber = "modal" + 16;
        this.addEventHandler();
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

  addEventHandler = () => {
    this.props.value(2);
    let storageRef = storage.ref();
    let eventImagesRef = storageRef.child(
      `eventsImages/${this.state.filePath.name}`
    );
    eventImagesRef
      .put(this.state.filePath)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          db.collection(
            this.props.collection === undefined
              ? "events"
              : `${this.props.collection}`
          )
            .doc(`${this.state.eventName}`)
            .set({
              eventName: this.state.eventName,
              url: url,
              audiance: this.state.audiance,
              shortDescription: this.state.shortDescription,
              fullDescription: this.state.fullDescription,
              date: this.state.date,
            })
            .then(() => {
              console.log("event added to firebase");
              this.props.value(0);
            });
          //.catch(err => {
          //   console.log('err add to firestore', err)
          //   alert('event was not added to firebase please try again')
          //   snapshot.ref.delete()
          // })
        });
        //.catch(err => {
        // console.log('err in download url', err)
        // alert('an error occured please try again')
        // snapshot.ref.delete()
        // })
      })
      .catch((err) => {
        console.log("err to upload image", err);
        alert("an error occured please try again");
      });
  };
  render() {
    const { modalIsOpen } = this.props;
    return (
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBBtn
            onClick={this.toggle(16)}
            rounded
            color="blue"
            className="text-white"
          >
            הוסף אירוע
          </MDBBtn>
        </MDBRow>
        <MDBModal
          position="left-top"
          isOpen={this.state.modal16}
          toggle={this.toggle(16)}
        >
          <MDBModalHeader toggle={this.toggle(16)} dir="rtl">
            הוסף מסע
          </MDBModalHeader>
          <form
            className="needs-validation uploadForm"
            noValidate
            onSubmit={this.clickHandler}
          >
            <MDBModalBody>
              <MDBInput
                required
                type="text"
                maxLength="24"
                labelClass={`col text-right text-dark `}
                className="col text-right "
                label="שם האירוע"
                getValue={(e) => this.setState({ ...this.state, eventName: e })}
              >
                <div className="invalid-feedback">חובה להכניס תוכן</div>
              </MDBInput>
              <div className="input-group">
                <div className="input-group-prepend"></div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    onChange={this.imageHandler}
                    required
                  />
                  <label
                    className={`custom-file-label ${
                      this.state.photoPath === "בחר תמונה"
                        ? "text-center"
                        : "text-left"
                    }`}
                    htmlFor="inputGroupFile01"
                  >
                    {this.state.photoPath}
                  </label>
                </div>
              </div>
              <MDBInput
                className="text-right"
                required
                type="date"
                getValue={(e) => this.setState({ ...this.state, date: e })}
              >
                <div className="invalid-feedback">חובה להכניס תוכן</div>
              </MDBInput>
              <MDBInput
                required
                type="text"
                labelClass="col
              text-right"
                label="קהל יעד"
                className="col text-right"
                getValue={(e) => this.setState({ ...this.state, audiance: e })}
              >
                <div className="invalid-feedback">חובה להכניס תוכן</div>
              </MDBInput>
              <MDBInput
                required
                maxLength="90"
                type="textarea"
                labelClass="col text-right"
                label="תיאור קצר"
                className={`col text-right maxHeight ${
                  this.state.isActive2 ? "isActive" : ""
                }`}
                getValue={(e) =>
                  this.setState({ ...this.state, shortDescription: e })
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
              <MDBInput
                required
                type="textarea"
                labelClass="col text-right"
                label="תיאור מלא"
                className={`col text-right maxHeight ${
                  this.state.isActive1 ? "isActive" : ""
                }`}
                getValue={(e) =>
                  this.setState({ ...this.state, fullDescription: e })
                }
                onFocus={() =>
                  this.setState({
                    ...this.state,
                    isActive1: false,
                    isActive2: true,
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
                הוסף אירוע
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default UploadEvent;
