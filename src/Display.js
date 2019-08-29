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
  let sunrise2 = null;
  sunrise2 = new Date( props.state.sunrise *1000);
  let sunriseHours = sunrise2.getHours();
  let sunriseMinutes = (sunrise2.getMinutes()<10?'0':'') + sunrise2.getMinutes();;
  let sunriseFormat = <span>{sunriseHours}:{sunriseMinutes} UT</span>

  let sunset2 = null;
  sunset2 = new Date( props.state.sunset *1000);
  let sunsetHours = sunset2.getHours();
  let sunsetMinutes = (sunset2.getMinutes()<10?'0':'') + sunset2.getMinutes();
  let sunsetFormat = <span>{sunsetHours}:{sunsetMinutes} UT</span>
  // sunset = new Date( props.state.sunset *1000);
console.log(sunrise2)
console.log(sunriseHours)
console.log(sunriseMinutes)


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
    <li onClick={props.visClickHandler}><strong>Temperature:</strong> {displayTemp} </li>
    <li><strong>Atmospheric Pressure:</strong> {props.state.pressure}</li>
    <li><strong>Humidity:</strong> {props.state.humidity}%</li>
    <li><strong>Sky:</strong> {desc}</li>
    <li><strong>Sunrise:</strong> {sunriseFormat}</li>
    <li><strong>Sunset:</strong> {sunsetFormat}</li>
  </ul>
</div>)
}

export default display;