import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from './AboutUs';
import './style.css';
import { MapContainer } from "./MapContainer";

const history = createBrowserHistory();

class App extends React.Component {


  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<MapContainer/>} />
        </Routes>
      </Router>
    );
  }
}
export default App;
