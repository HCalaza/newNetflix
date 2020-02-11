import React, { Component } from "react";
import "./WrapperList.css";
import Card from "./Card/Card.js";
import MoviesDB from "./../MoviesDB/MoviesDB.js";

import SearchField from "./SearchField/SearchField.js";

class WrapperList extends Component {
  constructor(props){
    super (props);
    this.state = {
      value: ""
    }
  }

  updateValue(newValue){
    this.setState({
      value: newValue
    })
    // console.log(this.state.value)
  }

  render() {
    const cardObject = new MoviesDB ()
    const entryData = cardObject.getData()

    const filteredSearch = entryData.filter((film) => {
      if(film.title.toLowerCase().match(this.state.value.toLowerCase()) != null)
      {
        return (film);
      }
    });//this.state.value);

    const exitData = filteredSearch.map ((i) => <Card title= {i.title} type={i.type} director={i.director} />)

    return (
      <div className="wrapperList">
        <SearchField updateFilm={this.updateValue.bind(this)} />

        <div className="wrapperRow">
            {exitData}
        </div>
      </div>
    );
  }
}

export default WrapperList;
