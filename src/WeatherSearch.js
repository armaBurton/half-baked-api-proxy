import { useState } from 'react';
import WeatherSpinner from './WeatherSpinner/WeatherSpinner';
import RenderWeather from './RenderWeather/RenderWeather';

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

  const weatherObj = {
    name: '',
    weather: [
      { 
        description: '' 
      },
    ],
    main:{
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      humidity: 0
    }
  };

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
          ? <WeatherSpinner />
          : weather.name === undefined
            ? <RenderWeather weather={weatherObj} state={state} />
            : <RenderWeather weather={weather} state={state}/> 
      } 
    </section>
  );
}
