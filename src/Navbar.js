import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    state={
        showCollapsed: false
    }

    show = ""

    //Responsive Hamburger Icon Functionality for React
    toggleMenu = () => {
        this.setState({
            showCollapsed: !this.state.showCollapsed
          })
        this.show = (this.state.showCollapsed) ? "" : " show" ;
    }


    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <span className="navbar-brand" href="/" >SofanaGPS</span>
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu} data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse" + this.show} id="navbarNav">

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
        );
    }
}

export default Navbar;