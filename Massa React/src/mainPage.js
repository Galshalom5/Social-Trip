import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import main from './main.js'
import Events from './Events.js'
import ContactUs from './ContactUs.js'
import Donation from './Donation.js'
import Gallery from './Gallery.js'
import AboutUs from './AboutUs.js'

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
            <MDBNavbar dark fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav center = "true">
                <MDBNavItem>
                    <MDBNavLink to="./ContactUs">צרו קשר</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Donation">תרומות</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem >
                  <MDBNavLink to="./Gallery">גלריה</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="./Events">אירועים</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                  <MDBNavLink  to="./AboutUs">אודות</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          <Switch>
            <Route path="/" component = {main} exact/>
            <Route path="/Gallery" component={Gallery} exact />
            <Route path="/Donation" component = {Donation} exact/>
            <Route path="/AboutUs" component={AboutUs} exact />
            <Route path="/Events" component = {Events} exact/>
            <Route path="/ContactUs" component={ContactUs} exact />
          </Switch>
          </Router>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;