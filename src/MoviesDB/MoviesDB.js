import React, { Component } from "react";

class MoviesDB extends Component {
    constructor (){
      super();
this.Movie = [
  {title:"Fast & Furious 9", type: "Film", director: "Justin Lin", description: ""},
  {title:"Fast & Furious 8", type: "Film", director: "Justin Lin", description: ""}
]
}

getData (){
  return this.Movie
}
}

export default MoviesDB;
