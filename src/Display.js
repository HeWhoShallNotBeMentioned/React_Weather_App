import React from 'react';

const display = (props) => {
  console.log("display props", props)
  const farenTemp = (((props.state.temp) - 273.15) * 9/5 + 32 ).toFixed(2);
  let desc = ''
  let lon = 0;
  let lat = 0;
  if (props.weather) {
   desc = props.weather['main'];
  }

  if (props.state.lon){
    lon = props.state.lon
  }
  if (props.state.lat){
    lat = props.state.lat
  }


return (<div className={'weatherBox'}>
  <h3>The current weather in {props.state.name} is:</h3>
  <ul>
    <li><strong>Tempurature:</strong> {farenTemp} Farenheit</li>
    <li><strong>Atmospheric Pressure:</strong> {props.state.pressure}</li>
    <li><strong>Humidity:</strong> {props.state.humidity}%</li>
    <li><strong>Sky:</strong> {desc}</li>
    
  </ul>
</div>)
}

export default display;