
export default function RenderHistory({ day }){
  const date = new Date((day.dt * 1000));

  return <div className='render-history'>
    <h5>{date.toString()}</h5>
    <p className="description">Description: {day.weather[0].description}</p>
    <div className="temp">
      <div>Current: {day.temp.day}°F</div>
      <div>Low: {day.temp.min}°F</div>
      <div>High: {day.temp.max}°F</div>
    </div>
    <div>
      <p className="atmosphere">
        <p className="baro">Barometric Pressure: {day.pressure}</p>
        <p className="humidity">Humidity: {day.humidity}</p>
      </p>
    </div>
    <div className="wind">
      <p className="speed">Wind Speed: {day.wind_speed}</p>
      <p className="gust">Gusts: {day.wind_gust}</p>
      <p className="degree">Direction: {day.wind_deg}°</p>
    </div>
  </div>;
}