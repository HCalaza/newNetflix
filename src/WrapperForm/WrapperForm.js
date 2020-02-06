import React, { Component } from "react";
import "./WrapperList.css";
import Selection from "./Selection.js";
import Input from "./Input.js";
import Input2 from "./Input.js";
import Button from "./Button.js";

class WrapperForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: "duration",
      tvShows: "chapters",
      documental: "scopes"
    };
  }

  changeItem() {}

  render() {
    return (
      <div className="wrapperForm">
        <Selection />
        <Input />
        <Button />
      </div>
    );
  }
}
export default WrapperForm;
