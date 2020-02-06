import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor() {
    super();

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
    // si films...
    /* return <label>
      Duration
      <input type="number" onChange={this.handleChange.bind(this)} />
    </label>
    */
  }

  render() {
    return (
      <form>
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
