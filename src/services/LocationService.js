import React from 'react';
import dataSource from './dataSource'

class LocationService extends React.Component {
    getLocation = async () => {
        const response = await dataSource.get('/api/locations/lastLocation');
        console.log("test", response.data)
        return response.data;
    }
}

export default LocationService;