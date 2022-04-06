import React from "react";
import './style.css';
import logo from "./assets/img/logo1.png";

class AboutUs extends React.Component {

    render() {
        return (
            <div className="container-2">
                <img src={logo} alt="logo" className="logo" />
                <div>
                    <h1>SofanaGPS Team Members:</h1>
                    <ul>
                        <li>
                            Safa Bayraktar
                        </li>
                        <li>
                            Ana Sanchez Sanchez
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AboutUs;