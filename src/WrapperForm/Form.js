import React, { Component } from "react";
import "./Form.css";
import Input from "./Input.js";
import Selection from "./Selection.js";

export default class Form extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Title" />

        <Input placeholder="Director" />
        <Selection />
        <Input placeholder="" />
      </div>
    );
  }
}
