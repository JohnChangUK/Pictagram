import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

class Map extends Component {
    
    render() {
        const mapContainer = <div style={{height:'100%', width:'100%'}}></div>
        const center = {
            lat: 40.7504753,
            lng: -73.9932668
        }

        return (
            <GoogleMapLoader
                containerElement = { mapContainer }
                googleMapElement = {
                    <GoogleMap
                        defaultZoom={14}
                        defaultCenter={center}
                        options={{streetViewControl: false, mapTypeControl: false}}>
                        </GoogleMap>
                } />
        );
    }
}

export default Map;