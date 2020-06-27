import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody } from "mdbreact";
import Loader from "./Loader";
import "../../css/LoaderModal.css";
class ModalLoader extends Component {
  state = {
    modal: true,
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  render() {
    const { isLightBox } = this.props;

    return (
      <MDBContainer className="myContainer">
        <MDBModal
          className="myModal"
          isOpen={this.state.modal}
          toggle={this.toggle}
          centered
          backdrop={false}
        >
          <MDBModalBody
            style={{ background: "rgba(0, 0, 0, 0.0001)" }}
            className={`${isLightBox === null ? "text-left" : "text-center"}`}
          >
            <Loader isLightBox={this.pros} />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalLoader;
