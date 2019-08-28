import React, {Component} from 'react';
import { geolocated } from "react-geolocated";

import Fetching from './Fetching';

class GeoLocation extends Component {
  
  render() {
    return !this.props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
       

        <Fetching lat={this.props.coords.latitude} lon={this.props.coords.longitude} />

    ) : (
        <div style={{marginBottom: '750px', backgroundImage: `url(${"./Wilm_Background.jpg"})`, color: 'black', fontSize: '80px', }}>Finding Location...</div>
    );
}

}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
}) (GeoLocation);