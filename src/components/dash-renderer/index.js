import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Modeller from '../modeller';
import Versioning from '../versioning';

class DashRenderer extends Component {
  render() {
    return (
      <div>
        Dashboard Renderer
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/modeller">Modeller</Link>
          </li>
          <li>
            <Link to="/versioning">Versioning</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/modeller">
            <Modeller />
          </Route>
          <Route path="/versioning">
            <Versioning />
          </Route>
        </Switch>
      </div>
        </Router>
      </div>
    )
  }
}

export default DashRenderer;
