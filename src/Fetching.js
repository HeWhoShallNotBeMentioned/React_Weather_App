import React, {Component} from 'react';

import axios from 'axios';
import Display from './Display';
require('dotenv').config();

class Fetching extends Component {
  constructor(props) {
    super(props)
    this.state={lat: null, lon: null,
    name: '', temp: null,
    pressure: null,
    humidity: null,
    weather: [],
     }
   }

   async componentDidMount(){
    console.log("Fetching props++++++   ", this.state.props)

  try {   
      let nameVar = null
      let tempVar = null
      let pressureVar = null
      let humidityVar = null
      let weatherVar = null
    
      const { data }  = await axios.get(process.env.REACT_APP_API_URL + 'lat=' + this.props.lat + '&lon=' + this.props.lon + '&APPID=' + process.env.REACT_APP_API_KEY);

      console.log("api_results...", data)

       nameVar = data.name
       tempVar = data.main.temp
       pressureVar = data.main.pressure
       humidityVar = data.main.humidity
       weatherVar = data.weather
 
      this.setState({name: nameVar, 
        temp: tempVar, 
        humidity: humidityVar, 
        pressure: pressureVar, 
        weather: weatherVar, 
      })
    }
    catch (error) {
      console.log(error)
    }
  }
  render(){
    return(
    <div >
      {
        this.state.weather[0] ? 
        <div>
          <h1 className="mainHeader">Weather App</h1>
          <Display 
          state={this.state}
          weather={this.state.weather[0]}
          /> 
        </div> : 
        <div style={{
          color: 'black', 
          fontSize: '80px', 
          marginBottom: '750px', 
          textAlign: 'center'}}>Loading Local Weather Data...'</div> }

   </div>
   )
  }
}
export default Fetching;