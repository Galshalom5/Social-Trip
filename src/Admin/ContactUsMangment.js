import React, { Component } from "react";
import { db } from "../index";
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
          if (itemId !== item.id) {
            return item;
          }
          return;
        });
        this.setState({
          messages: tempMessage,
        });
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

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

  render() {
    return (
      <div>
        <ContactUsTable
          deleteMessage={this.deleteMessage}
          //   toggle={this.toggle}
          messages={this.state.messages}
        />
        {}
      </div>
    );
  }
}
export default ContactUsMangment;
