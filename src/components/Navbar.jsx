import React, { Component } from "react";

import HomePage from "./HomePage.jsx";
import Login from "./Login.jsx";
import LoginTenant from "./LoginTenant.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/"> Home Page </Link>
                </li>
                <li>
                  <Link to="/Become a renter">Become a renter</Link>
                </li>
                <li>
                  <Link to="/Become a tenant">Become a tenant</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/Become a renter">
                <Login />
              </Route>
              <Route path="/Become a tenant">
                <LoginTenant />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default NavBar;
