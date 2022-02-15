export default function PokemonList({ pokemon }){

  return <div className='pokemon-card'>
    <h1>{pokemon.pokemon}</h1>
    <div className="abilities">
      <label>Ability 1
        <p>{pokemon.ability_1}</p>
      </label>
      <label>
        Ability 2
        <p>{pokemon.ability_2}</p>
      </label>
      <label>
        Hidden Ability
        <p>{pokemon.ability_hidden}</p>
      </label>
    </div>
  </div>;   
}