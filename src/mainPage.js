import React from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Donation from "./Donation.js";
import Main from "./main.js";
import AboutUs from "./AboutUs.js";
import Events from "./Events.js";
<<<<<<< HEAD
import ContactUs from "./ContactUs.js";
import Gallery from "./Gallery.js";
=======
import ContactUs from "./AboutUs.js";
import Gallery from "./Gallery.js";
import Loader from "./components/Loader";
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2

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
<<<<<<< HEAD
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              color="#ffe0b2 orange lighten-4"
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
              m0
            >
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center="true">
                  <MDBNavItem m-0>
                    <MDBNavLink to="./ContactUs" className="blue-grey-text">
                      צרו קשר
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem m-0>
                    <MDBNavLink to="./AboutUs" className="blue-grey-text">
                      אודות
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Gallery" className="blue-grey-text">
                      גלרייה
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Events" className="blue-grey-text">
                      אירועים
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./" className="blue-grey-text">
                      בית
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/Donation" component={Donation} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/ContactUs" component={ContactUs} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/Events" component={Events} />
            </Switch>
          </Router>
        </header>
      </div>
    );
=======
      return (
        <div>
          <header>
            <Router>
              <MDBNavbar
                color="bg-primary"
                fixed="top"
                dark
                expand="md"
                scrolling
                transparent
              >
                {!this.state.isWideEnough && (
                  <MDBNavbarToggler onClick={this.onClick} />
                )}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav center="true">
                    <MDBNavItem>
                      <MDBNavLink to="./ContactUs"> צרו קשר</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="./Donation">תרומות</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="./Gallery">גלרייה</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="./Events">אירועים</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="./AboutUs">אודות</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/Donation" component={Donation} />
                <Route exact path="/AboutUs" component={AboutUs} />
                <Route exact path="/ContactUs" component={ContactUs} />
                <Route exact path="/Gallery" component={Gallery} />
                <Route exact path="/Events" component={Events} />
              </Switch>
            </Router>
          </header>
        </div>
      );
    }
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
  }

export default FullPageIntroWithFixedTransparentNavbar;
