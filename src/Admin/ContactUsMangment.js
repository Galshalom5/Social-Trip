import React, { Component } from "react";
import { db } from "../index";
import $ from "jquery";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
} from "mdbreact";
import ContactUsTable from "./Components/ContactUsTable.js";
import "../css/Admin.css";
class ContactUsMangment extends Component {
  state = {
    messages: [],
  };

  deleteMessage = (id) => {
    var itemId = id;
    db.collection("ContactUs")
      .doc(`${id}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        var tempMessage = this.state.messages.filter((item, index) => {
          if (itemId != item.id) {
            return item;
          }
        });
        this.setState({
          messages: tempMessage,
        });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  //   addFeedBack = (name, txt) => {
  //     this.setState({
  //       ["modal16"]: !this.state["modal16"],
  //     });
  //     $(".feedBackForm")[0].classList.remove("was-validated");
  //     db.collection("FeedBack")
  //       .add({
  //         name: name,
  //         feedBackTxt: txt,
  //       })
  //       .then((docRef) => {
  //         docRef.get().then((doc) => {
  //           this.setState({
  //             feedBack: [...this.state.feedBack, doc],
  //           });
  //         });
  //       })
  //       .catch(function (error) {
  //         console.error("Error adding document: ", error);
  //       });
  //   };

  //   toggle = (nr) => () => {
  //     let modalNumber = "modal" + nr;
  //     this.setState({
  //       [modalNumber]: !this.state[modalNumber],
  //     });
  //   };

  fetchData = () => {
    db.collection("ContactUs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item, index) => {
          this.setState({
            messages: [...this.state.messages, item],
          });
        });
      });
  };
  componentDidMount() {
    this.fetchData();
  }
  //   submitHandler = (name, txt) => {
  //     console.log(name);
  //     console.log(txt);
  //     if ($(".feedBackForm")[0].checkValidity()) {
  //       this.addFeedBack(name, txt);
  //     }
  //     $(".feedBackForm")[0].classList.add("was-validated");
  //   };

  render() {
    return (
      <MDBContainer>
        <ContactUsTable
          deleteMessage={this.deleteMessage}
          //   toggle={this.toggle}
          messages={this.state.messages}
        />
        {/* <MDBModal
          position="left-top"
          isOpen={this.state.modal16}
          toggle={this.toggle(16)}
        >
          <MDBModalHeader dir="rtl">הוסף פידבק</MDBModalHeader>
          <MDBModalBody>
            <form noValidate className="needs-validation feedBackForm">
              <MDBInput
                required
                type="text"
                className="col text-right"
                hint="שם כותב הפידבק"
                getValue={(e) =>
                  this.setState({ ...this.state, feedBackName: e })
                }
              >
                <div className="invalid-tooltip">חובה להכניס שם כותב</div>
              </MDBInput>

              <MDBInput
                required
                hint="תוכן הפידבק"
                type="textarea"
                className="col text-right"
                getValue={(e) =>
                  this.setState({ ...this.state, feedBackText: e })
                }
              >
                <div className="invalid-tooltip">חובה להכניס תוכן</div>
              </MDBInput>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="danger" onClick={this.toggle(16)}>
              סגור
            </MDBBtn>
            <MDBBtn
              onClick={() => {
                this.submitHandler(
                  this.state.feedBackName,
                  this.state.feedBackText
                );
              }}
              color="warning"
            >
              שלח פידבק
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal> */}
      </MDBContainer>
    );
  }
}
export default ContactUsMangment;
