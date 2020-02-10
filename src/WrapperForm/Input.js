import React, { Component } from "react";
import "./Input.css";
import WrapperForm from "./WrapperForm.js";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Director: "",
      Other: ""
    };
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  drawInput() {
    if (this.props.typeItem == 1) {
      return (
        <label>
          Duración Película
          <input type="text" onChange={this.handleChange.bind(this)} />
        </label>
      );
    } else if (this.props.typeItem == 2) {
      return (
        <label>
          Número de capítulos
          <input type="text" onChange={this.handleChange.bind(this)} />
        </label>
      );
    } else if (this.props.typeItem == 3) {
      return (
        <label>
          Temática del Documental
          <input type="text" onChange={this.handleChange.bind(this)} />
        </label>
      );
    }
  }

  render() {
    console.log("pintate joder!s");
    console.log("typeItem", this.props.typeItem);
    return (
      <form>
        {this.props.typeItem}
        <h2>Enter your options</h2>

        <label>
          Title
          <input type="text" onChange={this.handleChange.bind(this)} />
        </label>

        <label>
          Director
          <input type="text" onChange={this.handleChange.bind(this)} />
        </label>

        {this.drawInput()}

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Input;
