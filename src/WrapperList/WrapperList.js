import React, { Component } from "react";
import "./WrapperList.css";
import Card from "./Card/Card.js";
import SearchField from "./SearchField/SearchField.js";

class WrapperList extends Component {
  render() {
    return (
      <div className="wrapperList">
        <SearchField />
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />

        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="wrapperRow">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default WrapperList;
