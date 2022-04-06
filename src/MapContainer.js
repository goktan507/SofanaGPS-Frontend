import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from "axios"

// Google's Map style property
const containerStyle = {
    width: '70vw',
    height: '600px'
};

// default center (GCU Campus) defined for map initialize
const center = {
    lat: 33.512743,
    lng: -112.130363
};


export class MapContainer extends React.Component {
    state = {
        markers: []
    }

    // GET Request from SofanaGSP-API to get last location of the golf cart
    // Updates the state to refresh map view
    getLocation = async () => {
        let resp;
        await axios.get('https://sofanagpsapi.azurewebsites.net/api/locations/lastLocation', {
            auth: {
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWORD
            }
        })
            //.then(response => this.setState({ location: response.data }))
            .then(response => resp = response.data);
            return resp;
    }

    //Initialize Map with Golf Cart Marker - Occurs when MapContainer component is being called
    async componentDidMount() {
        let loc = await this.getLocation();
        let mrkrs = this.loadMarkers(loc);
        this.setState({markers: mrkrs})
        console.log("Component Mounted: ", loc, "\nCount of Markers: ", mrkrs.length);
    }

    //Update Map with Golf Cart Marker - Occurs when MapContainer component receives an update
    //componentDidUpdate() {
    //    setTimeout(async () => {
    //        let loc = await this.getLocation();
    //        let mrkrs = this.loadMarkers(loc);
    //        this.setState({markers: mrkrs})
    //        console.log("Component Updated: ", loc, "\nCount of Markers: ", mrkrs.length, " Updated @ ", Date().toLocaleString());
    //    }, 6000);
    //}

    //Creates n number of markers, returns them in a list to be updated in state property. 
    //n => number of location info retrieved from API endpoint (/lastLocation)  
    loadMarkers(location) {
        let markers = [];
        location.forEach(loc => {
            markers.push(
                <div key={loc.cartId}>
                    {/* Golf Cart icon */}
                    <Marker
                        position={{
                            lat: parseFloat(loc.lat),
                            lng: parseFloat(loc.lon)
                        }}
                        icon={{
                            url: 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/008/228/original/golf-cart.png',
                            anchor: { x: 0, y: 10 },
                            scaledSize: { width: 35, height: 35 }
                        }}
                    />

                    {/* Label for Golf Cart icon */}
                    <Marker
                        position={{
                            lat: parseFloat(loc.lat),
                            lng: parseFloat(loc.lon)
                        }}
                        icon={{
                            url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Blank_button.svg/1200px-Blank_button.svg.png',
                            anchor: { x: 0, y: -15 },
                            scaledSize: { width: 35, height: 35 }
                        }}
                        label={loc.cartId.toString()}
                    />
                </div>)
        })
        return markers;
    }
    render() {
        return (
            <div className="container"> 
                <h2 className="map-h2">Find the closest Golf Cart on the Map</h2>
                <div className="map google-map">
                    <LoadScript
                        googleMapsApiKey={process.env.REACT_APP_API_KEY}
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            {this.state.markers}   
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    }
}

export default MapContainer;
