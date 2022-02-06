import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from "axios"


// Google's Map style property
const containerStyle = {
    width: '1200px',
    height: '600px'
};

// default center (GCU Campus) defined for map initialize
const center = {
    lat: 33.512743,
    lng: -112.130363
};


export class MapContainer extends React.Component {
    state = { location: { lat: 33.510726, lon: -112.127271 } }

    // GET Request from SofanaGSP-API to get last location of the golf cart
    // Updates the state to refresh map view
    getLocation = async () => {
        await axios.get('https://sofanagpsapi.azurewebsites.net/api/locations/lastLocation', {
            auth: {
                username: "sofanagps452",
                password: "cst452ana"
            }
        })
        .then(response => this.setState({ location: response.data }))
    }  

    async componentDidMount() {
        await this.getLocation();
        console.log("Component Mounted: ", this.state.location);
    }

    componentDidUpdate() {
        setTimeout( async () => {
            await this.getLocation();
            console.log("Component Updated: ", this.state.location);
        }, 10000);
    }

    render() {
        return (
            <div className="map container">
                <h2 className="map-h2">Find the closes Golf Cart on Map</h2>
                <div className="google-map">
                    <LoadScript
                        googleMapsApiKey='AIzaSyAys6ks4cIR_aNIoqLlyAMV0l7AuMJyIas'
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker position={{ lat: parseFloat(this.state.location.lat), lng: parseFloat(this.state.location.lon) }} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    }
}

export default MapContainer;