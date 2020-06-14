import React, { Component } from "react";
import {
  MDBContainer,
  MDBMask,
  MDBView,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBCard,
} from "mdbreact";
import FooterPage from "../components/footer.js";
import ContactUscomponnet from "../components/contactUs.js";

import "../css/index.css";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <MDBView className="bgcontactus">
          <MDBMask
            overlay="stylish-light"
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
          <MDBCard
            color="#e65100 orange darken-4"
            text="white"
            className="text-center mainCard"
          >
            <MDBCardBody>
              <figure className="figure">
                <h2 className="h2-responsive font-weight-normal text-center my-5 card_style">
                  "אדם אינו אלא תבנית, נוף מולדתו"
                </h2>
                <figcaption className="figure-caption text-left fig_style">
                  ש.טשרניחובסקי
                </figcaption>
              </figure>
            </MDBCardBody>
          </MDBCard>
          <MDBContainer className="my-5">
            <MDBRow className="justify-content-center">
              <MDBCol md="11" className="offset-md-3 justify-content-md-center">
                <p className="h4 text-center mb-4 ">צרו קשר</p>
                <ContactUscomponnet className="cdcd" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </main>
        <FooterPage />
      </div>
    );
  }
}

export default ContactUs;
