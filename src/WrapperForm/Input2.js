import React, { Component } from "react";
import "./Input.css";

class Input2 extends Component {
  render() {
    return (
      <div>
        <div className="inputDirector">
          <form>
            <label>
              <input type="text" name="name" />
            </label>
          </form>{" "}
        </div>
      </div>
    );
  }
}

export default Input2;
