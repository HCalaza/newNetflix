import React, { Component } from "react";
import "./WrapperList.css";
import Selection from "./Selection.js";
import Input from "./Input.js";
import { ThemeContext } from "../themeContext.js";

class WrapperForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeItem: 0,
      title: "",
      director: ""
    };
  }

  changeTypeOf(value) {
    this.setState({ typeItem: value });
  }
  sacarporconsola() {
    console.log("typeW", this.state.typeItem);
    console.log(this.state.typeItem.value);
  }
  render() {
    this.sacarporconsola();
    return (
      <div className="wrapperForm">
        <ThemeContext.Consumer>
        {movieManager => 
}
          <Selection changeItem={this.changeTypeOf.bind(this)} />
          <Input
            typeItem={this.state.typeItem}
            value={this.newFilms}
            options={this.options}
          />
        </ThemeContext.Consumer>
      </div>
    );
  }
}
export default WrapperForm;
