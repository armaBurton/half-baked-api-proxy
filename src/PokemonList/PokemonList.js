export default function PokemonList({ pokemon }){

  return <div className='pokemon-card'>
    <img src={pokemon.url_image} alt="" />
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
    <br></br>
    <div className="attack">
      <label>
        Attack
        <p>{pokemon.attack}</p>
      </label>
      <label>
        Defense
        <p>{pokemon.defense}</p>
      </label>
      <label>
        Hit Points
        <p>{pokemon.hp}</p>
      </label>
      <label>
        Special Attack
        <p>{pokemon.special_attack}</p>
      </label>
      <label>
        Special Defense
        <p>{pokemon.defense}</p>
      </label>
      <label>
        Speed
        <p>{pokemon.speed}</p>
      </label>
    </div>
  </div>;   
}