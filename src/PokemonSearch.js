import { useState } from 'react';
import Spinner from './Spinner/Spinner';
import PokemonList from './PokemonList/PokemonList';

export default function PokemonSearch() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState(``);
  const [isLoading, setIsLoading] = useState(false);
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
    // set the loading state to true
    setIsLoading(true);

    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${search}`);
    const data = await response.json();
    // put the jsonified data in state and set the loading state to false
    setPokemons(data.results);
    setIsLoading(false);
  }

  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
        <img src="./images/pikachu.gif" alt="" />
        <label>
            Search pokemon
          {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
          <input onChange={e => setSearch(e.target.value)}/>
        </label>
        <button onSubmit={handlePokemonSubmit}>Get pokemons</button>
      </form>
      {
        console.log('||', isLoading),
        pokemons.map((pokemon, i) => <PokemonList key={pokemon + i} pokemon={pokemon}/>)
      }
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
