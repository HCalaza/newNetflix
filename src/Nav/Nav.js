import React, { Component } from 'react';
import './Nav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import WrapperList from "./../WrapperList/WrapperList.js";
import WrapperForm from "./../WrapperForm/WrapperForm.js";
import logo from './../logo.svg';

//
class Nav extends Component {
render() {
  return (
    <Router>
      <div className="content">
        <nav className="navBar">
          <ul className="mainMenu">
            <NavLink to="/contentlist" className="menuElement" activeClassName="menuElementActive">
              <li className="textLink">Content list</li>
            </NavLink>

            <NavLink to="/addcontent" className="menuElement" activeClassName="menuElementActive">
              <li className="textLink">Add content</li>
            </NavLink>
          </ul>
        </nav>

        <Switch>

          <Route exact path="/contentlist">
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
