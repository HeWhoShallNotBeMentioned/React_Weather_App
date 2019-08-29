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
  let displayWind = '';
  let icon = props.weather['icon']
  let iconURL = 'http://openweathermap.org/img/wn/' + icon + '.png';
  let windMeters = props.state.windSpeed;
  let windMiles = windMeters * 2.237 
  let windDegree = props.state.windDir;
  let windDirText = '';

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

  
if (windDegree >= 337.5 && windDegree <= 360 && windDegree >= 0 && windDegree <= 22.5) {
  windDirText = 'North';
} else if (windDegree > 22.5 && windDegree <= 67.5) {
  windDirText = "NE"
} else if (windDegree > 67.5 && windDegree <= 112.5 ) {
  windDirText = "East"
} else if (windDegree > 112.5 && windDegree <= 157.5 ) {
  windDirText = "SE"
} else if (windDegree > 157.5 && windDegree <= 202.5 ) {
  windDirText = "South"
} else if (windDegree > 202.5 && windDegree <= 247.5 ) {
  windDirText = "SW"
} else if (windDegree > 247.5 && windDegree <= 292.5 ) {
  windDirText = "West"
} else if (windDegree > 292.5 && windDegree <= 337.5 ) {
  windDirText = "NW"
} else {
  windDirText = 'Not Found';
}


  if (props.weather) {
   desc = props.weather['description'];
  }

  if (props.state.lon){
    lon = props.state.lon
  }
  if (props.state.lat){
    lat = props.state.lat
  }

  if (props.state.visibility) {
    displayTemp = <span style={{textDecoration: 'underline'}}>{celsiusTemp} Celsius</span>
    displayWind = <span style={{textDecoration: 'underline'}}>{windMeters} Meters/Sec {windDirText}</span>
  } else {
    displayTemp = <span style={{textDecoration: 'underline'}}>{farenTemp} Farenheit</span>
    displayWind = <span style={{textDecoration: 'underline'}}>{windMiles} Miles/hour {windDirText}</span>
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
    <li> <img alt={"weather icon" } src={iconURL} /></li>
    <li><strong>Sky:</strong> <span style={{textTransform: 'capitalize'}}>{desc}</span> </li>
    <li onClick={props.visClickHandler}><strong>Wind:</strong> {displayWind}</li>
    <li><strong>Sunrise:</strong> {sunriseFormat}</li>
    <li><strong>Sunset:</strong> {sunsetFormat}</li>
  </ul>
</div>)
}

export default display;