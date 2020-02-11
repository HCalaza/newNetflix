import React, { Component } from "react";
// import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header.js";
import Footer from "./Footer/footer.js";
import WrapperList from "./WrapperList/WrapperList.js";
import { ThemeContext } from "./themeContext.js";
import ReactDOM from "react-dom";
import Nav from "./Nav/Nav.js";
import DataManager from "./DataManager/DataManager";
import firebase from "firebase";
import { connect } from "react-firebase";
// import MoviesDB from "./MoviesDB";
// import
// import Form from "./WrapperForm/Form.js";
const dataBase = DataManager();

class App extends Component {
  constructor(props) {
    super(props);

    this.Movie = [];
  }
  GetMovies() {
    return firebase
      .database()
      .ref("/value")
      .once("value")
      .then(function(myData) {
        return 1;
      });
  }

  UpdateMovies(datosForm) {
    firebase
      .database()
      .ref("/value")
      .once("value")
      .then(function(myData) {
        // Write new user
        firebase
          .database()
          .ref("users/")
          .set(datosForm);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThemeContext.Provider
          value={{
            movies: this.Movie,
            UpdateMovies: this.UpdateMovies.bind(this),
            GetMovies: this.GetMovies.bind(this)
          }}
        >
          <Nav />
        </ThemeContext.Provider>
        <Footer />
      </div>
    );
  }
}
export default App;
