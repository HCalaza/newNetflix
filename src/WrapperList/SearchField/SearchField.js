import React, { Component } from "react";
import "./SearchField.css";
import Input from "../../Input/Input.js";
class SearchField extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="myBtnContainer">
          <button className="btn active" onClick={console.log("todos")}>
            {" "}
            Show all
          </button>
          <button className="btn" onClick={console.log("asdasdasd")}>
            {" "}
            Movies
          </button>
          <button className="btn" onClick={console.log("series")}>
            {" "}
            Series
          </button>
          <button className="btn" onClick={console.log("Documentals")}>
            {" "}
            Documentals
          </button>
        </div>

        <div className="inputText">
          <Input placeholder= "Esto es para buscar" />
        </div>
      </React.Fragment>
    );
  }
}

export default SearchField;
// <button className="btn active" onClick={filterSelection("all")}>
//   {" "}
//   Show all
// </button>
// <button className="btn" onClick={filterSelection("cars")}>
//   {" "}
//   Movies
// </button>
// <button className="btn" onClick={filterSelection("animals")}>
//   {" "}
//   Series
// </button>
// <button className="btn" onClick={filterSelection("fruits")}>
//   {" "}
//   Documentals
// </button>
