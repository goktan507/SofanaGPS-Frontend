import React from 'react';
import dataSource from './dataSource'

class LocationService extends React.Component {
    getLocation = async () => {
        const response = await dataSource.get('/locations');
        console.log(response)
        return response.data;
    }
}

export default LocationService;