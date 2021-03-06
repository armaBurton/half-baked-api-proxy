import { useState } from 'react';
import WeatherSpinner from './WeatherSpinner/WeatherSpinner';
import RenderWeather from './RenderWeather/RenderWeather';
import RenderHistory from './RenderHistory/RenderHistory';

export default function WeatherSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState(`portland`);
  const [state, setState] = useState(`or`);
  const [country, setCountry] = useState(`US`);
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
    
    setIsLoading(true);

    const response = await fetch(`/.netlify/functions/weather?city=${city.toLowerCase()}&state=${state.toLowerCase()}&country=${country}`);
    const data = await response.json();

    setWeather(data);
    setIsLoading(false);
  }

  return (
    <section className='weather'>
      <form onSubmit={handleWeatherSubmit}>
        <label>
            Search weather for a city
          <div className="input-holder">
            <label>
              City
              <input value={city} onChange={e => setCity(e.target.value)}/>
            </label>
            <label>
              State
              <input value={state} onChange={e => setState(e.target.value)} />
            </label>
            <label>
              Country
              <input value={country} onChange={e => setCountry(e.target.value)} />
            </label>
          </div>
          <button>Get weather</button>
        </label>
      </form>
      {
        isLoading
          ? <></>
          : <RenderWeather weather={weather.current} city={city} state={state}/>
      } 
      {
        isLoading
          ? <WeatherSpinner />
          : weather.daily === undefined
            ? <></>
            : weather.daily.map((day, i) => <RenderHistory key={day + i} day={day} />)
      }
    </section>
  );
}
