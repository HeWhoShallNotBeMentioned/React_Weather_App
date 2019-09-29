import React, {Component} from 'react';
import { geolocated } from "react-geolocated";

import Fetching from './Fetching';


class GeoLocation extends Component {
  
  render() {
    return !this.props.isGeolocationAvailable ? (
        <div style={{
            margin: 'auto',
              textAlign: 'center',
              marginTop: "250px",
              marginBottom: '750px', 
              color: 'black', 
              fontSize: '80px',
              backgroundColor: '#3CB371',
              borderRadius: '15px',
            }}
            >Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div style={{
            margin: 'auto',
              textAlign: 'center',
              marginTop: "250px",
              marginBottom: '750px', 
              color: 'black', 
              fontSize: '80px',
              backgroundColor: '#3CB371',
              borderRadius: '15px',
            }}>Geolocation is not enabled</div>
    ) : this.props.coords ? (
       

        <Fetching lat={this.props.coords.latitude} lon={this.props.coords.longitude} />

    ) : (
        <div style={{
            margin: 'auto',
            textAlign: 'center',
            marginTop: "250px",
            marginBottom: '750px', 
            color: 'black', 
            padding: '30px',
            backgroundColor: '#3CB371',
            borderRadius: '15px',
            fontSize: '80px', }}>Finding Location...</div>
        );
    }
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
}) (GeoLocation);