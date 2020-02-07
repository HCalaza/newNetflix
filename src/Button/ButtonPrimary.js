import React, { Component } from "react";
import './ButtonPrimary.css';

class ButtonPrimary extends Component {
  constructor (props){
    super (props)
  }
  render() {
  return (
      <button className="ButtonStyle" name="search" type="button"><span className="ButtonText">Texto</span></button>
  );
}
}
export default ButtonPrimary;
