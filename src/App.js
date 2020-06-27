import React from "react";
import FullPageIntroWithFixedTransparentNavbar from "./mainNav_heb";
import AdminLogin from "./Admin/AdminLogin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminRoute from "./Admin/AdminRoute";

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
