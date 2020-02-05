import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <input type="text" name="name" placeholder={this.props} />
        </div>
      </div>
    );
  }
}

export default Input;
