import React, { Component } from "react";
import { MDBContainer, MDBMask, MDBView, MDBCardBody, MDBCard } from "mdbreact";
import FooterPage from "./components/footer.js";
import Lightbox from "./components/Lightbox";
import "./css/index.css";

class Gallery extends Component {
  render() {
    return (
      <div>
        <MDBView className="bggallery">
          <MDBMask
            overlay="stylish-light"
            className="flex-center flex-column text-white text-center"
          ></MDBMask>
        </MDBView>
        <main>
          <MDBView>
            <MDBCard
              color="#e65100 orange darken-4"
              text="white"
              className="text-center mainCard"
            >
              <MDBCardBody>
                <figure className="figure">
                  <h2 className="h2-responsive font-weight-normal text-center card_style">
                    "אדם אינו אלא תבנית נוף מולדתו"
                  </h2>
                  <figcaption className="figure-caption text-left fig_style">
                    ש.טשרניחובסקי
                  </figcaption>
                </figure>
              </MDBCardBody>
            </MDBCard>
          </MDBView>
          <MDBContainer className="text-center my-5">
            <Lightbox />
          </MDBContainer>
        </main>
        <footer>
          <FooterPage />
        </footer>
      </div>
    );
  }
}

export default Gallery;
