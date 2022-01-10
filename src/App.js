import { createBrowserHistory } from "history";
import React from "react";
import { Router, Switch, Route } from "react-router";
import Navbar from "./Navbar";
import AboutUs from './AboutUs';
import MapView from './MapView';
import './style.css';

const history = createBrowserHistory();
const location = {
  lat: 33.510726,
  lng: -112.127271,
}


class App extends React.Component {
  render() {
  return (
    <Router history={history}>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/" render={() => <MapView location={location} zoomLevel={17}/>} />
        </Switch>
      </div> 
    </Router>
    )
  }
}
export default App;
