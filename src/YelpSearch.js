import { useState } from 'react';
import Spinner from './YelpSpinner/YelpSpinner';
import YelpList from './YelpList/YelpList';

export default function YelpSearch() {
    // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('Portland OR');
  const [biz, setBiz] = useState([])
;
  async function handleYelpSubmit(e) {
    e.preventDefault();
  
    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`/.netlify/functions/yelp?search=${search}`);
    // put the jsonified data in state and set the loading state to false
    const data = await response.json();
    setBiz(data);
    setIsLoading(false);
  }

  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        <label>
          Search yelp for a city
          {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
          <input required onChange={e => setSearch(e.target.value)}/>
          <button onSubmit={handleYelpSubmit}>Search yelp</button>
        </label>
      </form>
      {
        isLoading
          ? <Spinner />
          : biz.map((bizniz, i) => <YelpList key={bizniz + i} bizniz={bizniz}/>)
      }
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}