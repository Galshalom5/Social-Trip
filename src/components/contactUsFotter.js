import React from "react";
<<<<<<< HEAD
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const contactUsFotter = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 blue-grey-text text-center mb-4">צרו קשר</p>
            <div direction="rtl" className="blue-grey-text">
              <MDBInput
                label="שם מלא"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="אימייל"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="נושא"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="תוכן ההודעה"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="amber">
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
=======
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
>>>>>>> b28ad5506d5f7203edf1a53de948f632d8259ce2
