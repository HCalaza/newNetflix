import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor (props){
    super(props)
  }

stringLength() {
  let titleLength = this.props.Title

  if (titleLength.length> 10) {
    titleLength = titleLength.substring (0,10)
    return titleLength + "..."
  }
  else {
    return this.props.Title
  }
}

  render() {
    return (
      <div className="cardWrapper">
        <div className="backgroundImg">
      <img className="poster" src= {this.props.Img}/>
        </div>
        <div className="textWrapper">
        <div className="title">
        <p> {this.stringLength}</p>
        </div>
        <div className="bodyText">
        <p> {this.props.Director}</p>
        </div>
        <div className="bodyText">
        <p> {this.props.Type}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default Card;
