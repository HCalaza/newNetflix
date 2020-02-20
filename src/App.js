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

    this.state = { Movie: [] };
  }
  GetMovies() {
    return firebase
      .database()
      .ref("/moviesList/")
      .once("value")
      .then(videoList => {
        this.setState({ Movie: videoList.val() });
      });
  }

  UpdateMovies() {
     console.log(this.state)
      let movieName = this.state.Title
      let directorName = this.state.Director
      let otherDescription = this.state.Description
      let movieType = this.state.Type
      let imagenType = this.state.Img
      if (movieName == "" || directorName == "" || otherDescription == "" || movieType == "" || imagenType == "") {
          alert("You should fill all fields")
          return false
      }
      let numberOfMovies = 0;

       firebase
        .database()
        .ref("/moviesList/")
        .once("value")
      .then (function(myData){
         numberOfMovies = Object.keys(myData.val()).length;
        console.log (numberOfMovies)
      })

    .then(function(myData){
      let movieID = numberOfMovies +1
      firebase
      .database ()
      .ref ('moviesList/' + movieID)
      .set ({
        Title: movieName,
        Director: directorName,
        Description: otherDescription,
        Type: movieType,
        Img: imagenType
      })
   })
  }

  render() {
    return (
      <div className="App">
        {window.onload = this.GetMovies.bind(this)}
        <Header />
        <ThemeContext.Provider
          value={{
            movies: this.state.Movie,
            UpdateMovies: this.UpdateMovies,
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
