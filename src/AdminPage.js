import React, { Component } from "react";
import { auth } from "./index";
class AdminPage extends Component {
  render() {
    return (
      <div>
        <button onClick={() => auth.signOut()}>signOut</button>
      </div>
    );
  }
}

export default AdminPage;
