import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import LocationService from "./services/LocationService";

const service = new LocationService();
const containerStyle = {
    width: '1200px',
    height: '600px'
};

const center = {
    lat: 33.512743,
    lng: -112.130363
};

export class MapContainer extends React.Component {
    state = { location: { lat: 33.510726, lng: -112.127271 } }

    //  After 10 seconds - updates the location in state, crashes
    //  cannot modify the defaultLocation of map...
    componentDidMount() {
        setTimeout(() => {
            this.setState({ location: service.getLocation() })
            console.log("Component mount: ", this.state.location);
        }, 10000)
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
                            zoom={10}
                        >
                            <Marker position={{lat: this.state.location.lat, lng: this.state.location.lng}}/>
                            <Marker position={{lat: 33.512738, lng: -112.131661}}/>
                            
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        );
    }
}

export default MapContainer;