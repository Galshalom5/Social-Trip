import React, { useState, useEffect } from "react";
import FullPageIntroWithFixedTransparentNavbar from "./mainNav_heb";
import AdminLogin from "./Admin/AdminLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./index";
import AdminRoute from "./Admin/AdminRoute";
import { MDBContainer } from "mdbreact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/AdminRoute" component={AdminRoute} />
          <Route exact path="/(Admin)" component={AdminLogin} />
          <Route component={FullPageIntroWithFixedTransparentNavbar} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
