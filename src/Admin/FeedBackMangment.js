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
import FeedBackTable from "./Components/FeedBackTable.js";
import "../css/Admin.css";
class FeedBackMangement extends Component {
  state = {
    feedBack: [],
    modal16: false,
    feedBackName: "",
    feedBackText: "",
  };

  deleteFeedBack = (id) => {
    var itemId = id;
    db.collection("FeedBack")
      .doc(`${id}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        var tempFeedBack = this.state.feedBack.filter((item, index) => {
          if (itemId != item.id) {
            return item;
          }
        });
        this.setState({
          feedBack: tempFeedBack,
        });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  addFeedBack = (name, txt) => {
    this.setState({
      ["modal16"]: !this.state["modal16"],
    });
    $(".feedBackForm")[0].classList.remove("was-validated");
    db.collection("FeedBack")
      .add({
        name: name,
        feedBackTxt: txt,
      })
      .then((docRef) => {
        docRef.get().then((doc) => {
          this.setState({
            feedBack: [...this.state.feedBack, doc],
          });
        });
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  fetchData = () => {
    db.collection("FeedBack")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item, index) => {
          this.setState({
            feedBack: [...this.state.feedBack, item],
          });
        });
      });
  };
  componentDidMount() {
    this.fetchData();
  }
  submitHandler = (name, txt) => {
    if ($(".feedBackForm")[0].checkValidity()) {
      this.addFeedBack(name, txt);
    }
    $(".feedBackForm")[0].classList.add("was-validated");
  };

  render() {
    return (
      <MDBContainer>
        <FeedBackTable
          deleteFeedBack={this.deleteFeedBack}
          toggle={this.toggle}
          feedBack={this.state.feedBack}
        />
        <MDBModal
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
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default FeedBackMangement;
