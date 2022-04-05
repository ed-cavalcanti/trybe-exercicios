import pokemons from "../data";
import Pokemon from "./Pokemon"

function Pokedex() {
  const cards = pokemons.map((pokemon, index) => {
    return (
      <Pokemon key={index} name={pokemon.name} type={pokemon.type} averageWeight={pokemon.averageWeight} image={pokemon.image} />
    )
  })
  return (
    <div className="container">
      { cards }
    </div>
  )
}

export default Pokedex;
