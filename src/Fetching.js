import React, {Component} from 'react';
require('dotenv').config();


class Fetching extends Component {


  render(){
    return(<div><p>Can you see me?</p><a href={process.env.REACT_APP_API_URL + '&APPID=' + process.env.REACT_APP_API_KEY}>Get weather</a></div>)
  }
}

export default Fetching;