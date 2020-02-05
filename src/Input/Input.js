import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div className="inputText">
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Buscar" />
        </form>{" "}
      </div>
    );
  }
}

export default Input;
