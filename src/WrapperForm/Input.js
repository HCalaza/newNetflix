import React, { Component } from "react";
import "./Input.css";
import WrapperForm from "./WrapperForm.js";
import { ThemeContext } from "../themeContext.js";
class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Title: "",
      Director: "",
      Description: "",
      Type:"",
      Img:""

    };
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  drawInput() {
    if (this.props.typeItem == 0) {
      return (
        <label>
          Duración Película
          <input type="text" name="Duración de la película" placeholder="Duración Película" onChange={this.handleChange.bind(this)} />
          {this.state.Type = "Film"}
        </label>
      );
    } else if (this.props.typeItem == 1) {
      return (
        <label>
          Número de capítulos
          <input type="text" name="Número de capítulos" placeholder="Número de capítulos" onChange={this.handleChange.bind(this)} />
          {this.state.Type = "Tv Shows"}
        </label>
      );
    } else if (this.props.typeItem == 2) {
      return (
        <label>
          Temática del Documental
          <input type="text"name="Temática del Documental" placeholder="Temática del Documental" onChange={this.handleChange.bind(this)} />
          {this.state.Type = "Documental"}
        </label>
      );
    }
  }

  render() {
    return (
        <form>
          {this.props.typeItem}
          <h2>Enter your options</h2>

          <label>
            Title
            <input type="text" name="Title" placeholder="title" onChange={this.handleChange.bind(this)} />
          </label>

          <label>
            Director
            <input type="text" name="Director" placeholder="Director" onChange={this.handleChange.bind(this)} />
          </label>

          <label>
            Description
            <input type="text" name="Description" placeholder="Description" onChange={this.handleChange.bind(this)} />
          </label>

          <label>
            Imagen
            <input type="text" name="Img" placeholder="Imagen" onChange={this.handleChange.bind(this)} />
          </label>

          {this.drawInput()}

          <ThemeContext.Consumer>
          {movieManager => {
            return (
              <button
                type="button"
                onClick={movieManager.UpdateMovies.bind(this)}
              >
              Submit
              </button>
            )}}
          </ThemeContext.Consumer>
        </form>
      )
    }
  }

export default Input;
