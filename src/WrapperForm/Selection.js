import React, { Component } from "react";
import Select from "react-select";
import Form from "./Form.js";
import "./Selection.css";
import WrapperForm from "./WrapperForm.js";

export default class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectedOption: e.value });
    this.props.changeItem(e.value);
  }

  render() {
    const options = [
      { value: 1, label: "Films" },
      { value: 2, label: "Tv Shows" },
      { value: 3, label: "Documental" }
    ];
    return (
      <div className="wrapperSelection">
        <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
