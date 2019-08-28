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
    lat: null,
    lon: null,
  }

  }

  async componentDidMount(){
    try {                            
    const {data, }  = await axios.get(process.env.REACT_APP_API_URL + 'lat=34.2104&lon=-77.915543&APPID=' + process.env.REACT_APP_API_KEY);
    console.log("api_results...", data)
    console.log("api_results_weather...", data.weather)
      const nameVar = data.name
      const tempVar = data.main.temp_max
      const pressureVar = data.main.pressure
      const humidityVar = data.main.humidity
      const weatherVar = data.weather
      const latVar = data.coord['lat']
      const lonVar = data.coord['lon']
 
      this.setState({name: nameVar, 
        temp: tempVar, 
        humidity: humidityVar, 
        pressure: pressureVar, 
        weather: weatherVar,
        lat: latVar,
        lon: lonVar,
      })

    } catch (error) {
      console.log(error)
    }
  }


  render(){
    return(<div >
      <h1 className="mainHeader">Weather App</h1>
      <Display 
      state={this.state}
      weather={this.state.weather[0]}
      />
   </div>)
  }
}
export default Fetching;