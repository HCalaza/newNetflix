import React, { Component } from 'react';
import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WrapperList from "./../WrapperList/WrapperList.js";
import WrapperForm from "./../WrapperForm/WrapperForm.js";
//
class Nav extends Component {
render() {
  return (
    <Router>
      <div className="content">
        <nav className="navBar">
          <ul className="mainMenu">
            <Link to="/" className="menuElement" activeClassName="activeMenuelement">
              <li className="textLink">Content list</li>
            </Link>

            <Link to="/addcontent" className="menuElement" activeClassName="activeMenuelement">
              <li className="textLink">Add content</li>
            </Link>
          </ul>
        </nav>

        <Switch>

          <Route exact path="/">
            <WrapperList />
          </Route>
          <Route path="/addcontent">
            <WrapperForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}}

export default Nav;
