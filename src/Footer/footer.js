import React, { Component } from "react";
import "./footer.css";
import copyleft from "../Assets/copyleft.svg"

class Footer extends Component {
  render() {
    return (
      <div className="App">
        <footer className="App-footer">
          <img src={copyleft} className="copyleftLogo" alt="Copyleft logo" />
          <p>Todos los derechos no reservados</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
