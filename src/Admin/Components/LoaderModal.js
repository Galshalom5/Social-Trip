import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Loader from './Loader';
import '../../css/LoaderModal.css'
class ModalLoader extends Component {
  state = {
    modal: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <MDBContainer className="myContainer">
        <MDBModal className="myModal" isOpen={this.state.modal} toggle={this.toggle} centered backdrop={false} >
        <MDBModalBody  style={{background: "rgba(0, 0, 0, 0.0001)"}} className="text-left" >
        <Loader className=""/>
        </MDBModalBody>

        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalLoader;