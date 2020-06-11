import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarBrand,
} from "mdbreact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Partners from "./Page_heb/Partners_heb.js";
import Main from "./Page_heb/mainPage_heb.js";
import AboutUs from "./Page_heb/AboutUs_heb.js";
import Events from "./Page_heb/Events_heb.js";
import ContactUs from "./Page_heb/ContactUs_heb.js";
import Gallery from "./Gallery.js";
import logo from "./Images/logo_img.png";

import "./css/index.css";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              color="rgba(62, 69, 81, 0.7) rgba-stylish-strong"
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
              className="mx-auto"
            >
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <div className="navbar-nav nav-flex-icons ml-auto justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      alt=""
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/masahevratii/"
                    >
                      <i className="fab fa-facebook fa-2x white-text"></i>
                    </a>
                  </li>
                </div>
                <MDBNavbarNav className="justify-content-md-center">
                  <MDBNavItem>
                    <MDBNavLink
                      active
                      to="./ContactUs"
                      className="navText r-5 p-3"
                    >
                      צרו קשר
                      <i className="fas fa-envelope  iconclass"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Partners" className=" navText r-5 p-3">
                      שותפים למסע <i className="fas fa-users iconclass"></i>
                    </MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink to="./AboutUs" className=" navText r-5 l-5 p-3">
                      הסיפור שלנו
                      <i className="fas fa-info-circle iconclass"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Gallery" className=" navText r-5 p-3">
                      תמונות
                      <i className="fas fa-images  iconclass"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Events" className=" navText r-5 p-3">
                      מסעות
                      <i className="fas fa-calendar  iconclass"></i>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarBrand className="start">
                  <a href="./">
                    <img
                      src={logo}
                      style={{ width: 90, marginTop: -3 }}
                      alt=""
                    />
                  </a>
                </MDBNavbarBrand>
              </MDBCollapse>
            </MDBNavbar>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/ContactUs" component={ContactUs} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/Events" component={Events} />
              <Route exact path="/Partners" component={Partners} />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
