import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return (
      <div className="cardWrapper">
        <div className="textWrapper">
          <div className="title">
            <p> {this.props.Title} </p>
          </div>
          <div className="bodyText">
            <p> {this.props.Director}</p>
          </div>
          <div className="bodyText">
            <p> {this.props.Type}</p>
          </div>
          <div className="bodyText">
            <p> {this.props.Description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
