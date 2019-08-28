import React, {Component} from 'react';

import axios from 'axios';
import Display from './Display';
require('dotenv').config();

class Fetching extends Component {
  constructor(props) {
    super(props)
    this.state={lat: null, lon: null,
    name: '', }
  }

  async componentDidMount(){
    try {                            
    const {data}  = await axios.get(process.env.REACT_APP_API_URL + 'lat=34.2104&lon=-77.915543&APPID=' + process.env.REACT_APP_API_KEY);
    console.log("api_results...", data)
      const name = data.name
      this.setState({name: name})

    } catch (error) {
      console.log(error)
    }
  }


  render(){
    return(<div><h1>Weather App</h1><Display name={this.state.name}/></div>)
  }
}
export default Fetching;