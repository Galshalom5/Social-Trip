import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBAlert,
} from "mdbreact";
import "../css/UploadEvent.css";
import "../css/Admin.css";
import InputDropzoneComponent from "./Components/InputDropzoneComponent";
class UploadFeedBack extends Component {
  state = {
    modal16: false,
    pictureName: "",
    pictureUrl: "",
    pictureFiles: [],
    isActive1: false,
    isActive2: false,
  };

  onCancleUpload = () => {
    let modalNumber = "modal" + 16;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
    this.setState({
      pictureFiles: [],
    });
  };
  onRemoveFile = (file) => {
    var tempPictures = this.state.pictureFiles.filter((item, index) => {
      return item !== file;
    });
    this.setState({
      pictureFiles: tempPictures,
    });
  };
  onAddFile = (file) => {
    var ext = ["jpg", "png", "gif", "jpeg", "PNG", "JPEG"];
    if (ext.includes(file.name.substring(file.name.lastIndexOf(".") + 1))) {
      this.setState({
        pictureFiles: [...this.state.pictureFiles, file],
      });
    }
  };
  clickHandler = async (event) => {
    event.preventDefault();
    if (this.state.pictureFiles.length) {
      let modalNumber = "modal" + 16;
      var tempPic = this.state.pictureFiles;
      this.props.addPictureHandle(tempPic);
      this.setState({
        ...this.state,
        [modalNumber]: !this.state[modalNumber],
        pictureFiles: [],
      });
    } else {
      if (!event.target.classList.contains("was-validated"))
        event.target.className += " was-validated";
    }
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    const { disabled } = this.props;
    return (
      <MDBContainer>
        <MDBBtn
          style={disabled ? { pointerEvents: "none", opacity: "0.4" } : {}}
          onClick={this.toggle(16)}
          rounded
          color="blue"
        >
          הוסף תמונה לגלרייה
        </MDBBtn>
        <MDBModal
          position="left-top"
          isOpen={this.state.modal16}
          toggle={this.toggle(16)}
        >
          <MDBModalHeader toggle={this.toggle(16)} dir="rtl">
            הוסף תמונה
          </MDBModalHeader>
          <form
            className="needs-validation"
            noValidate
            onSubmit={this.clickHandler}
          >
            <MDBModalBody style={{ maxHeight: "75vh" }}>
              <MDBAlert color="primary">יש להעלות תמונה אחת לפחות</MDBAlert>
              <InputDropzoneComponent
                onAddFile={this.onAddFile}
                onRemoveFile={this.onRemoveFile}
              >
                <div className="invalid-feedback">
                  חובה להכניס תמונה אחת לפחות
                </div>
              </InputDropzoneComponent>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => {
                  this.onCancleUpload();
                }}
              >
                ביטול
              </MDBBtn>
              <MDBBtn type="submit" color="primary">
                הוסף תמונות
              </MDBBtn>
            </MDBModalFooter>
          </form>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default UploadFeedBack;
