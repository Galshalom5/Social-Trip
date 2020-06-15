import React, { Component } from "react";
import { db, timestamp } from "../index";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";


class contactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      name: "",
      email: "",
      subject: "",
      message: "",
      key: "0",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    // e.preventDefault();

    db.collection("ContactUs")
      .add({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        timestamp: timestamp,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <div direction="rtl" className="grey-text">
                <MDBInput
                  dir="rtl"
                  placeHolder="שם מלא"
                  icon="user"
                  group
                  type="text"
                  className="white-text"
                  validate
                  error="wrong"
                  success="right"
                  getValue={(e) => this.setState({ ...this.state, name: e })}
                />
                <MDBInput
                  dir="rtl"
                  placeHolder="אימייל"
                  icon="envelope"
                  group
                  type="email"
                  className="white-text"
                  validate
                  error="wrong"
                  success="right"
                  getValue={(e) => this.setState({ ...this.state, email: e })}
                />
                <MDBInput
                  dir="rtl"
                  placeHolder="נושא"
                  icon="tag"
                  group
                  type="text"
                  className="white-text"
                  validate
                  error="wrong"
                  success="right"
                  getValue={(e) => this.setState({ ...this.state, subject: e })}
                />
                <MDBInput
                  dir="rtl"
                  type="textarea"
                  rows="2"
                  color="white-text"
                  className="white-text"
                  placeHolder="תוכן ההודעה"
                  icon="pencil-alt"
                  getValue={(e) => this.setState({ ...this.state, message: e })}
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  type="submit"
                  outline
                  color="orange darken-4"
                  onClick={this.handleClick}
                >
                  שלח
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default contactUs;
