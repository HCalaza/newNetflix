import React, { Component } from "react";
import "./DataManager.css";
import firebase from "firebase";
import { connect } from "react-firebase";
// class DataManager extends Component {
// constructor(props){
// super(props);
// this.state = {};
// }

// componentWillMount(){}
// componentDidMount(){}
// componentWillUnmount(){}

// componentWillReceiveProps(){}
// shouldComponentUpdate(){}
// componentWillUpdate(){}
// componentDidUpdate(){}
// <script src="https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js"></script>;

function DataManager() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0sZng8JHNDAePg3L7zrxP69XY8BLS8R8",
    authDomain: "newnetflics.firebaseapp.com",
    databaseURL: "https://newnetflics.firebaseio.com",
    projectId: "newnetflics",
    storageBucket: "newnetflics.appspot.com",
    messagingSenderId: "194027030470",
    appId: "1:194027030470:web:0108c6bf9f8247c17ed4c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  return firebase;
}
export default DataManager;
