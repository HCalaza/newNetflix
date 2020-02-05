import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="cardWrapper">
        <div className="textWrapper">
          <div className="title">
            <p> TITLE </p>
          </div>
          <div className="bodyText">
            <p> Tipo</p>
          </div>
          <div className="bodyText">
            <p> Director</p>
          </div>
          <div className="bodyText">
            <p> Descripción</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
