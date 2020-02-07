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

  updateFilm(newValue){
    this.setState({
      value: newValue
    })
  }













  render() {
    const cardObject = new MoviesDB ()
    const entryData = cardObject.getData()
    const exitData = entryData.map ((i) => <Card title= {i.title} type={i.type} director={i.director} description={i.description} />)


    return (
      <div className="wrapperList">
        <SearchField updateFilm={this.updateFilm.bind(this)} />
        <div className="wrapperRow">
            {exitData}
        </div>
      </div>
    );
  }
}

export default WrapperList;
