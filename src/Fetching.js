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
    visibility: false,
    sunrise: null,
    sunset: null,
    windSpeed: null,
    windDir: null,

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
      let sunriseVar = null
      let sunsetVar = null
      let windSpeedVar = null
      let windDirVar = null
    
      const { data }  = await axios.get(process.env.REACT_APP_API_URL + 'lat=' + this.props.lat + '&lon=' + this.props.lon + '&APPID=' + process.env.REACT_APP_API_KEY);

      console.log("api_results...", data)

       nameVar = data.name
       tempVar = data.main.temp
       pressureVar = data.main.pressure
       humidityVar = data.main.humidity
       weatherVar = data.weather
       sunriseVar = data.sys.sunrise
       sunsetVar = data.sys.sunset
       windSpeedVar = data.wind.speed
       windDirVar = data.wind.deg

      this.setState({name: nameVar, 
        temp: tempVar, 
        humidity: humidityVar, 
        pressure: pressureVar, 
        weather: weatherVar, 
        sunrise: sunriseVar,
        sunset: sunsetVar,
        windSpeed: windSpeedVar,
        windDir: windDirVar,
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  visibilityClickHandler = () => {
    const newVis = !this.state.visibility
    this.setState({ visibility: newVis})
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
          visClickHandler={this.visibilityClickHandler}
          /> 
        </div> : 
        <div style={{
          margin: 'auto',
            textAlign: 'center',
            marginTop: "250px",
            marginBottom: '750px', 
            color: 'black', 
            fontSize: '80px',
            backgroundColor: '#3CB371',
            borderRadius: '15px',
          }}>Loading Local Weather Data...</div> }

   </div>
   )
  }
}
export default Fetching;