import React, { Component } from "react";
import Select from "react-select";
import Form from "./Form.js";
import "./Selection.css";

export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
    this.handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
  }
  render() {
    const { selectedOption } = this.state;
    const options = [
      { value: "Films", label: "Films" },
      { value: "Series", label: "Tv Shows" },
      { value: "Documental", label: "Documental" }
    ];
    return (
      <div className="wrapperSelection">
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
