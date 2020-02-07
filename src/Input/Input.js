import React, { Component } from "react";
import "./Input.css";

class InputText extends Component {
  constructor (props) {
    super (props);
    this.state = {
      placeholder: this.props.placeholder
    }
  }
  handleChange (event){
    this.props.updateValue(event.target.value)
  }
  render() {
  return (
     <input className="InputField" type="text" name="firstname" placeholder ={this.state.placeholder}  onChange={this.handleChange.bind(this)} />
  );
}
}
export default InputText;
