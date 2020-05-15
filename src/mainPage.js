import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Donation from './Donation.js'
import Main from './main.js'
import AboutUs from './AboutUs.js'
import Events from './Events.js'
import ContactUs from './AboutUs.js'
import Gallery from './Gallery.js'

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

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center = "true">
                  <MDBNavItem >
                    <MDBNavLink to="./ContactUs"> צרו קשר</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem >
                    <MDBNavLink to="./Donation">תרומות</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem >
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
             <Route exact path='/' component={Main} />
             <Route exact path='/Donation' component={Donation} />
             <Route exact path='/AboutUs' component={AboutUs} />
             <Route exact path='/ContactUs' component={ContactUs} />
             <Route exact path='/Gallery' component={Gallery} />
             <Route exact path='/Events' component={Events} />
            </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;