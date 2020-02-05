import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 10000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div style={{ marginTop: "80px" }}>
        <button className="button" onClick={this.fetchData} disabled={loading}>
          {loading && <i className="fa fa-refresh fa-spin"></i>}
          {loading && <span>Submit</span>}
        </button>
      </div>
    );
  }
}
