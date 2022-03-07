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
    state = {
        location: [{ Id: '6222f7e0d12f2d6bd60c67fe', lon: '-112.128878', lat: '33.514707', cartId: 0, dateTime: '01/31/2022 09:24:46' },
        { Id: '6222f7e0d12f2d6bd60c68fe', lon: '-112.128878', lat: '33.515707', cartId: 1, dateTime: '01/31/2022 09:24:46' }],
        markers: []
    }

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
        this.loadMarkers();
        console.log("Component Mounted: ", this.state.location);
    }

    //Update Map with Golf Cart Marker - Occurs when MapContainer component receives an update
    componentDidUpdate() {
        setTimeout(async () => {
            await this.getLocation();
            this.loadMarkers();
            console.log("Component Updated: ", this.state.location);
        }, 10000);
    }

    loadMarkers() {
        let markers = [];
        this.state.location.forEach(loc => {
            markers.push(
                <div>
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
        this.setState({markers: markers});
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
                            {this.state.markers}   
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    }
}

export default MapContainer;