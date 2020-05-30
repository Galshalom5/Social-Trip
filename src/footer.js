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

<<<<<<< HEAD
        <MDBFooter color="orange lighten-3" className="font-small pt-4 mt-4">
=======
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow></MDBRow>
            <MDBRow>
              <MDBCol md="6">
                <ContactUsFotter />
              </MDBCol>
              <MDBCol md="6">
<<<<<<< HEAD
                <h5 className="blue-grey-text title">קישורים</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!" className="blue-grey-text">
                      מכללת ספיר
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" className="blue-grey-text">
                      עמותת רוח נכון
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" className="blue-grey-text">
                      מכללת דוד ילין
                    </a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!" className="blue-grey-text">
                      עמותת גולשים בים על שם נעמי.מ
                    </a>
=======
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
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
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
