import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <span className="navbar-brand" href="/" >SofanaGPS</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/">Map</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item nav-link" to="/about-us">About Us</Link>
                            </li>
                        </ul>

                    </div >
                </nav >
        )
    }
}

export default Navbar;