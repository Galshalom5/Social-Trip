import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { auth } from "../index";
import { withRouter } from "react-router-dom";

import SideNavPage from "./SideNavPage";

const AdminRoute = ({ history }) => {
  if (!auth.currentUser) {
    alert("please log in first");
    history.replace("/Admin");
    return null;
  }

  return <SideNavPage />;
};

export default withRouter(AdminRoute);
