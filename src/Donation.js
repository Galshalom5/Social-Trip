import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import FooterPage from "./footer.js";
import "./index.css";
class Donation extends Component {
  render() {
    return (
      <div>
        <MDBView className="bg">
          <MDBMask
            overlay="orange-light"
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
          <MDBContainer className="text-center my-5"></MDBContainer>
        </main>
        <FooterPage />
      </div>
    );
  }
}

export default Donation;
