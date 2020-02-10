import React, { Component } from "react";

class MoviesDB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);

    this.Movie = [
      {
        title: "Fast & Furious 9",
        type: "Film",
        director: "Justin Lin",
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
        title: "Fast & Furious 1",
        type: "Film",
        director: "Justin Lin",
        description: ""
      }
    ];
  }
  handleChange(e) {
    this.setState(this.movie);
  }
  getData() {
    return this.Movie;
  }
}

export default MoviesDB;
