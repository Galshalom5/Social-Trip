import React, { Component } from "react";
import { db, timestamp } from "../index";
import emailjs from "emailjs-com";

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
      date: "",
    };

    this.errData = {
      errName: "חובה להזין שם",
      errSubject: "חובה להזין נושא",
      errEmail: "חובה להזין כתובת אימייל חוקית",
      errMessage: "חובה להזין תוכן",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = async (event) => {
    event.preventDefault();
    if (!event.target.classList.contains("was-validated"))
      event.target.className += " was-validated";

    if (event.target.checkValidity()) {
      event.target.classList.remove("was-validated");
      this.submitHandler();
    }
  };

  submitHandler = (e) => {
    var templateParams = {
      from_name: this.state.name + "(" + this.state.email + ")",
      to_name: this.state.email,
      subject: this.state.subject,
      message_html: this.state.message,
    };
    db.collection("ContactUs")
      .add({
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
        date: timestamp,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    emailjs
      .send(
        "default_service",
        "template_Bkvy0Vjv",
        templateParams,
        "user_L28KT301EPkn7JC3qdNCp"
      )
      .then(
        (result) => {
          this.setState({
            comment: [],
            name: "",
            email: "",
            subject: "",
            message: "",
            date: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="justify-content-end">
            <form
              className="needs-validation"
              noValidate
              onSubmit={this.handleClick}
            >
              <div direction="rtl" className="grey-text text-right">
                <MDBInput
                  required
                  dir="rtl"
                  labelClass="col text-right ml-0"
                  label="שם מלא"
                  icon="user"
                  group
                  type="text"
                  className="white-text"
                  getValue={(e) => this.setState({ ...this.state, name: e })}
                  value={this.state.name}
                >
                  <div className="invalid-feedback">{this.errData.errName}</div>
                </MDBInput>
                <MDBInput
                  required
                  dir="rtl"
                  labelClass="col text-right ml-0"
                  label="אימייל"
                  icon="envelope"
                  group
                  type="email"
                  className="white-text"
                  error="wrong"
                  success="right"
                  getValue={(e) => this.setState({ ...this.state, email: e })}
                  value={this.state.email}
                >
                  <div className="invalid-feedback">
                    {this.errData.errEmail}
                  </div>
                </MDBInput>
                <MDBInput
                  required
                  dir="rtl"
                  labelClass="col text-right ml-0"
                  label="נושא"
                  icon="tag"
                  group
                  type="text"
                  className="white-text"
                  error="wrong"
                  success="right"
                  getValue={(e) => this.setState({ ...this.state, subject: e })}
                  value={this.state.subject}
                >
                  <div className="invalid-feedback">
                    {this.errData.errSubject}
                  </div>
                </MDBInput>
                <MDBInput
                  required
                  dir="rtl"
                  type="textarea"
                  rows="2"
                  color="white-text"
                  className="white-text"
                  label="תוכן ההודעה"
                  labelClass="col text-right ml-0"
                  icon="pencil-alt"
                  getValue={(e) => this.setState({ ...this.state, message: e })}
                  value={this.state.message}
                >
                  <div className="invalid-feedback">
                    {this.errData.errMessage}
                  </div>
                </MDBInput>
              </div>
              <div className="text-center">
                <MDBBtn type="submit" outline color="orange darken-4">
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
