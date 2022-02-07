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
    state = { location: { lat: 0, lon: 0 } }

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

    //Initialize Map with Golf Cart Marker - Occurs when MapContainer component is being called
    async componentDidMount() {
        await this.getLocation();
        console.log("Component Mounted: ", this.state.location);
    }

    //Update Map with Golf Cart Marker - Occurs when MapContainer component receives an update
    componentDidUpdate() {
        setTimeout( async () => {
            await this.getLocation();
            console.log("Component Updated: ", this.state.location);
        }, 10000);
    }

    render() {
        return (
            <div className="map container">
                <h2 className="map-h2">Find the closest Golf Cart on the Map</h2>
                <div className="google-map">
                    <LoadScript
                        googleMapsApiKey='AIzaSyBRPpo_b0Avhje0523IAidpVRAp4XAHcSg'
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker 
                                position={{ 
                                    lat: parseFloat(this.state.location.lat), 
                                    lng: parseFloat(this.state.location.lon) 
                                }}
                                icon={{
                                    url:'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/008/228/original/golf-cart.png',
                                    anchor: {x: 15, y: 50}, 
                                    scaledSize: {width: 35, height: 35}
                                }}
                            />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    }
}

export default MapContainer;