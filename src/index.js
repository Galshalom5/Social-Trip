import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./css/index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import registerServiceWorker from "./registerServiceWorker";

const config = {
  apiKey: "AIzaSyAInRpKsKV1c9wfn93jjCLuSW9eXjWqmTI",
  authDomain: "socialtrip-f5408.firebaseapp.com",
  databaseURL: "https://socialtrip-f5408.firebaseio.com",
  projectId: "socialtrip-f5408",
  storageBucket: "socialtrip-f5408.appspot.com",
  messagingSenderId: "711929649987",
  appId: "1:711929649987:web:ac989f29358f72b1b9adf6",
  measurementId: "G-RMJ74WB7DJ",
};
firebase.initializeApp(config);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
const td = firebase.firestore.Timestamp();

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();

export { storage, db, auth, timestamp, td, firebase as default };
