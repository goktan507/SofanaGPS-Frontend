import { createBrowserHistory } from "history";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from './AboutUs';
import MapView from './MapView';
import './style.css';
import LocationService from "./services/LocationService";

const history = createBrowserHistory();
// const location = {
//   lat: 33.510726,
//   lng: -112.127271,
// }
const service = new LocationService();

class App extends React.Component {
  state = { location: { lat: 33.510726, lng: -112.127271 } }
  loc = service.getLocation();

  //  After 10 seconds - updates the location in state, crashes
  //  cannot modify the defaultLocation of map...
  componentDidMount() {
    setTimeout(() => {
      this.setState({ location: this.loc })
    }, 10000)
    console.log("Component mount: ", this.state.location);
  }

  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<MapView location={this.state.location} zoomLevel={17} />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
