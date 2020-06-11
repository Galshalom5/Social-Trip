import React from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const contactUs = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <div direction="rtl" className="grey-text">
              <MDBInput
                dir="rtl"
                placeholder="שם מלא"
                icon="user"
                group
                type="text"
                className=""
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                dir="rtl"
                placeholder="אימייל"
                icon="envelope"
                group
                type="email"
                className=""
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                dir="rtl"
                placeholder="נושא"
                icon="tag"
                group
                type="text"
                className=""
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                dir="rtl"
                type="textarea"
                rows="2"
                color="white"
                className=""
                placeholder="תוכן ההודעה"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="orange darken-4">
                שלח
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default contactUs;
