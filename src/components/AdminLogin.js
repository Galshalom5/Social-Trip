import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';



const AdminLogin = () => {



return (

<MDBContainer className="" style={{height: '100vh'}}>
  <MDBRow className="d-flex flex-row justify-content-center h-100">
    <MDBCol md="6" className="d-flex flex-column d-flex justify-content-center h-75">
      <form >
        <p className="h5 text-center mb-4">Sign in</p>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn>Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>

);
};

export default AdminLogin;