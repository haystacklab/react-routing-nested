import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../components/dashboard';
import Login from '../components/login';

class MainApp extends Component {
  render() {
    return (
      <div>
          Main App
          <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/dashboard"><Dashboard /></Route>
          </Router>
      </div>
    )
  }
}

export default MainApp;
