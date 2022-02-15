import { useState } from 'react';

export default function WeatherSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('Portland OR');
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState(`portland`);
  const [state, setState] = useState(`or`);
  const [country, setCountry] = useState(`USA`);
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
        // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
      
  
        // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form>
        <label>
            Search weather for a city
          {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
          <button>Get weather</button>
        </label>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
