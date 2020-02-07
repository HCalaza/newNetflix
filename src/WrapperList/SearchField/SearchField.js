import React, { Component } from "react";
import "./SearchField.css";
import Input from "../../Input/Input.js";
import ButtonPrimary from "../../Button/ButtonPrimary.js"
import MoviesDB from "./../../MoviesDB/MoviesDB.js"



class SearchField extends Component {
constructor(props){
  super (props);
  this.state = {
    value: ""
  }
}
updateValue(newValue){
  this.setState({
    value: newValue
  })
  console.log(this.state.value)
}
  render() {
    return (

<div className="SearchField">
        <div className="inputText">
          <Input placeholder= "Busca una película" updateValue={this.updateValue.bind(this)} />
        </div>
        <div className="buttonSearch">
          <ButtonPrimary buttonText="Buscar" />
        </div>
</div>
    );
  }
}

export default SearchField;
