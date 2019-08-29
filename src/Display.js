import React from 'react';

const display = (props) => {
  console.log("display props", props)
  const farenTemp = (((props.state.temp) - 273.15) * 9/5 + 32 ).toFixed(2);
  const celsiusTemp = (props.state.temp - 273.15).toFixed(2)
  let desc = ''
  let lon = 0;
  let lat = 0;
  let mainClass = 'weatherBoxOther';
  let displayTemp = '';

  if (props.weather) {
   desc = props.weather['main'];
  }

  if (props.state.lon){
    lon = props.state.lon
  }
  if (props.state.lat){
    lat = props.state.lat
  }

  if (props.state.visibility) {
    displayTemp = <span style={{textDecoration: 'underline'}}>{celsiusTemp} Celsius</span>
  } else {
    displayTemp = <span style={{textDecoration: 'underline'}}>{farenTemp} Farenheit</span>
  }

if ( lat < 36 && lat > 34 && lon > -79 && lon < -77 ) {
  mainClass='weatherBoxWilm'
}


return (<div className={mainClass}>
  <h3>The current weather in {props.state.name} is:</h3>
  <ul>
    <li onClick={props.visClickHandler}><strong>Tempurature:</strong> {displayTemp} </li>
    <li><strong>Atmospheric Pressure:</strong> {props.state.pressure}</li>
    <li><strong>Humidity:</strong> {props.state.humidity}%</li>
    <li><strong>Sky:</strong> {desc}</li>
    
  </ul>
</div>)
}

export default display;