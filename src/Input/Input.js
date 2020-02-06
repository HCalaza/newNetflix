import React, { Component } from "react";
import "./Input.css";

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      placeholder: this.props.placeholder
    }
  }
  render() {
  return (
     <input className="InputField" type="text" name="firstname" placeholder ={this.state.placeholder} />
  );
}
}
export default InputText;
