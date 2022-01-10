import { createBrowserHistory } from "history";
import React from "react";
import { Router, Switch, Route } from "react-router";
import Navbar from "./Navbar";
import AboutUs from './AboutUs';
import MapView from './MapView';
import './style.css';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/" component={MapView} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App;
