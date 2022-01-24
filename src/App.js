import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Navbar/>
        <Routes>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/" element={<MapView location={location} zoomLevel={17} />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
