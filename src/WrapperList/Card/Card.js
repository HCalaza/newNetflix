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
            <p> {this.props.title} </p>
          </div>
          <div className="bodyText">
            <p> {this.props.director}</p>
          </div>
          <div className="bodyText">
            <p> {this.props.type}</p>
          </div>
          <div className="bodyText">
            <p> {this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
