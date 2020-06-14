import React, { Component } from "react";
import { db } from "../index";
import {
  MDBContainer,
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCollapse,
} from "mdbreact";
import CarouselFooter from "./CarouselFooter.js";
import ContactUs from "./contactUsFooter.js";
import "../css/index.css";
class footer extends Component {
  state = {
    feedBack: [],
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
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
        <MDBFooter color="blue-grey lighten-5" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="justify-content-md-center">
            <MDBRow></MDBRow>
            <MDBRow center>
              <MDBCol md="3">
                <>
                  <MDBBtn
                    color="#e65100 orange darken-4"
                    className="rnbtn"
                    // color="unique-color"
                    onClick={this.toggleCollapse("basicCollapse")}
                    style={{ marginBottom: "1rem" }}
                  >
                    צור קשר
                  </MDBBtn>
                  <MDBCollapse
                    id="basicCollapse"
                    isOpen={this.state.collapseID}
                  >
                    <ContactUs />
                  </MDBCollapse>
                </>
              </MDBCol>
              <MDBCol md="3" className="text-center ">
                <ul>
                  <h5 className="blue-grey-text title">קישורים</h5>
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
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="3" className="text-center align-self-md-center">
                <li>
                  <a
                    target="_blank"
                    alt=""
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/masahevratii/"
                    className="m-1"
                  >
                    <i className="fab fa-facebook fa-2x indigo-text"></i>
                  </a>
                  <a target="_blank" href="/" alt="" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x red-text"></i>
                  </a>
                  <a
                    target="_blank"
                    href="/"
                    alt=""
                    rel="noopener noreferrer"
                    className="m-1"
                  >
                    <i className="fab fa-instagram fa-2x blue-text"></i>
                  </a>
                </li>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://github.com/Galshalom5/Social-Trip">
                {" "}
                Gal | Tom | Dor | Naomi | Guy
              </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default footer;
