import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'
import "./style.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} style={{ fontSize: '36px' }} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

const MapView = ({ location, zoomLevel }) => {

  return (
    <div className="map container">
      <h2 className="map-h2">Find the closes Golf Cart on Map</h2>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAys6ks4cIR_aNIoqLlyAMV0l7AuMJyIas' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text="Cart"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
export default MapView;