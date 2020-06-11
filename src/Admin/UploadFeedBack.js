import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBDatePickerV5,
} from "mdbreact";

class UploadFeedBack extends Component {
  state = {
    modal16: false,
    eventName: "",
    filePath: "",
    date: "",
    audiance: "",
    shortDescription: "",
    fullDescription: "",
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle(16)}>הוסף פידבק</MDBBtn>
        <MDBModal
          position="left-top"
          isOpen={this.state.modal16}
          toggle={this.toggle(16)}
        >
          <MDBModalHeader toggle={this.toggle(16)} dir="rtl">
            הוסף פידבק
          </MDBModalHeader>
          <MDBModalBody>
            <div className="form-group">
              <MDBInput
                type="text"
                labelClass="col text-right"
                label="שם המגיב"
                className="col text-right"
                getValue={(e) =>
                  this.setState({ ...this.state, audiance: e }, () =>
                    console.log(e)
                  )
                }
              />
              <MDBInput
                type="textarea"
                labelClass="col text-right"
                label="תיאור קצר"
                className="col text-right"
                getValue={(e) =>
                  this.setState({ ...this.state, shortDescription: e }, () =>
                    console.log(e)
                  )
                }
              />
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(16)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">הוסף</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default UploadFeedBack;
