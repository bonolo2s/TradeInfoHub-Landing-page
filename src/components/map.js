import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
    const position = [51.505, -0.09]; // Set your desired position
    return ( 
        <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
     );
}
 
export default Map;