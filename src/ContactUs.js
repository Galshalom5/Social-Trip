import React, { Component } from "react";
<<<<<<< HEAD
import {
  MDBContainer,
  MDBMask,
  MDBView,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import FooterPage from "./footer.js";
import ContactUsFotter from "./components/contactUsFotter.js";
import "./index.css";
=======
import { MDBContainer, MDBMask, MDBView } from "mdbreact";
import FooterPage from "./footer.js";
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
class ContactUs extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <MDBView className="bgcontactus">
          <MDBMask
            overlay="orange-light"
=======
        <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
          <MDBMask
            overlay="purple-light"
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
<<<<<<< HEAD
          <MDBContainer className="text-center my-5 right-align">
            <ContactUsFotter />
          </MDBContainer>
        </main>

=======
          <MDBContainer className="text-center my-5"></MDBContainer>
        </main>
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
        <FooterPage />
      </div>
    );
  }
}

export default ContactUs;
