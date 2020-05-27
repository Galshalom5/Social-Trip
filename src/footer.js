import React, { Component } from "react";
import { db } from "./index";
import { MDBContainer, MDBFooter, MDBRow, MDBCol } from "mdbreact";
import CarouselFooter from "./components/CarouselFooter.js";
import ContactUsFotter from "./components/contactUsFotter.js";
class footer extends Component {
  state = {
    feedBack: [],
  };

  componentDidMount() {
    db.collection("FeedBack")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((item, index) => {
          this.setState({
            feedBack: [...this.state.feedBack, item],
          });
        });
      });
  }

  render() {
    return (
      <div>
        <CarouselFooter feedBack={this.state.feedBack} />

        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow></MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <ContactUsFotter />
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href=""> Gal | Tom | Dor | Naomi | Guy</a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default footer;
