import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const contactUsFotter = () => {
return (
<MDBContainer >
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">צרו קשר</p>
        <div direction ='rtl'  className="grey-text">
          <MDBInput  label="שם מלא" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput  label="אימייל" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="נושא" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="תוכן ההודעה" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="secondary">
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

export default contactUsFotter;