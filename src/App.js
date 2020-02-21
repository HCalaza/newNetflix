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
const furgonetaDePelis = [];
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
  FetchMovies() {
    // make the API call
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=587770ea8dff8673ccc558dabbb682b4&sort_by=popularity.desc"
    )
      .then(res => res.json())
      .then(data => {
        data.results.map(item => {
          furgonetaDePelis.push({
            Title: item.title,
            Img:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
              item.poster_path,
            Type: "",
            Director: ""
          });
          return furgonetaDePelis;
        });
      })
      .then(furgo => {
        let numberOfMovies = 0;
        console.log("hola");

        firebase
          .database()
          .ref("/moviesList/")
          .once("value")
          .then(function(myData) {
            console.log(Object.keys(myData.val()).length);
            numberOfMovies = Object.keys(myData.val()).length;
          })
          .then(function() {
            let movieID = numberOfMovies + 1;
            firebase
              .database()
              .ref("moviesList/")
              .set(furgonetaDePelis);
          });
      });
  }

  UpdateMovies() {
    let movieName = this.state.Title;
    let directorName = this.state.Director;
    let otherDescription = this.state.Description;
    let movieType = this.state.Type;
    let imagenType = this.state.Img;
    if (
      movieName == "" ||
      directorName == "" ||
      otherDescription == "" ||
      movieType == "" ||
      imagenType == ""
    ) {
      alert("You should fill all fields");
      return false;
    }
    let numberOfMovies = 0;

    firebase
      .database()
      .ref("/moviesList/")
      .once("value")
      .then(function(myData) {
        numberOfMovies = Object.keys(myData.val()).length;
      })

      .then(function(myData) {
        let movieID = numberOfMovies + 1;
        firebase
          .database()
          .ref("moviesList/" + movieID)
          .set({
            Title: movieName,
            Director: directorName,
            Description: otherDescription,
            Type: movieType,
            Img: imagenType
          });
      });
  }

  render() {
    return (
      <div className="App">
        {(window.onload = this.GetMovies.bind(this))}

        <Header />
        <ThemeContext.Provider
          value={{
            movies: this.state.Movie,
            UpdateMovies: this.UpdateMovies,
            GetMovies: this.GetMovies.bind(this)
          }}
        >
          {(window.onload = this.FetchMovies)}
          <Nav />
        </ThemeContext.Provider>
        <Footer />
      </div>
    );
  }
}
export default App;
