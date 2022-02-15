import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="./images/pikachu.gif" alt="" />
      <PokemonSearch />
      <YelpSearch />
      { /* stretch goal: <WeatherSearch /> */ }
    </div>
  );
}

export default App;
