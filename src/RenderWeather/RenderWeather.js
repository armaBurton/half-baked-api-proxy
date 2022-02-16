export default function RenderWeather({ weather, state }){

  return <div className='weather-card'>
    <h1>{weather.name}, <span>{state}</span></h1>
    <p className="description">Description: {weather.weather[0].description}</p>
    <div className="temp">
      <div>Current: {weather.main.temp}F</div>
      <div>Low: {weather.main.temp_min}F</div>
      <div>High: {weather.main.temp_max}F</div>
    </div>
    <p className="baro">Barometric Pressure: {weather.main.pressure}</p>
    <p className="humidity">Humidity: {weather.main.humidity}%</p>
  </div>;
}