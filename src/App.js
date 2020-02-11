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
// import firebase from "firebase";
import { connect } from "react-firebase";
// import MoviesDB from "./MoviesDB";
// import
// import Form from "./WrapperForm/Form.js";
const dataBase = DataManager();

class App extends Component {
  constructor(props) {
    super(props);

    /*this.Movie = [
      {
        title: "Fast & Furious 9",
        type: "Film",
        director: "Justin Pean",
        description: ""
      },
      {
        title: "Fast & Furious 8",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 7",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 6",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 5",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 4",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 3",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 2",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Star Wars Episode 1",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Star Wars Episode 2",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Star Wars Episode 3",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Star Wars Episode 4",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Star Trek",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Harry Potter",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Harry el Sucio",
        type: "Film",
        director: "Justin Lin",
        description: ""
      },
      {
        title: "Fast & Furious 1",
        type: "Film",
        director: "Justin Lin",
        description: ""
      }
    ];*/
  }
  GetMovies() {}
  UpdateMovies(datosForm) {
    firebase
      .database()
      .ref("/users/")
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
