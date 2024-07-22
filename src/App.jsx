import { CardsGame } from "./components/CardsGame";
import { useState } from "react";

function App() {
  // TODO: fetch 20 pokemon informations to state
  const [pokemonList, setPokemonList] = useState([
    {
      name: 'name1',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      name: 'name2',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      name: 'name3',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      name: 'name4',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      name: 'name5',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
  ]);

  return (
    <>
      <CardsGame cardsList={pokemonList} />
    </>
  );
}

export default App
