import React, { Component } from "react";
import { db } from "../index";
import { MDBContainer, MDBFooter, MDBRow, MDBCol } from "mdbreact";
import CarouselFooter from "./CarouselFooter.js";

import logo from "../Images/logo_img.png";
import logoruch from "../Images/logoruch.png";
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
              {/* <MDBCol className="text-center align-self-md-center">
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
                    <ContactUs className="cdcd" />
                  </MDBCollapse>
                </>
              </MDBCol> */}

              <MDBCol
                xs="4"
                md="3"
                className="text-center align-self-md-center"
              >
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
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCF2HoWUxaTn4REDw2tBJkew"
                    alt=""
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube fa-2x red-text"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/socialjourney1001/"
                    alt=""
                    rel="noopener noreferrer"
                    className="m-1"
                  >
                    <i className="fab fa-instagram fa-2x blue-text"></i>
                  </a>
                </li>
              </MDBCol>
              {/* <MDBCol className="text-center align-self-md-center">
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
                </ul>
              </MDBCol> */}
              <MDBCol
                xs="4"
                md="3"
                className="text-center align-self-md-center"
              >
                <a href="./">
                  <img src={logo} style={{ width: 80 }} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/Ruach.Nachon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={logoruch}
                    style={{ width: 50, height: 60 }}
                    alt=""
                  />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/"> Gal | Tom | Dor | Naomi | Guy</a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default footer;
