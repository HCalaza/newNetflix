import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor (props){
    super(props)
  }

stringLength() {
  let titleLength = this.props.Title

  if (titleLength.length> 20) {
    titleLength = titleLength.substring (0,20)
    return titleLength + "..."
  }
  else {
    return titleLength
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
        <p>
        {this.stringLength()}
        </p>
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
