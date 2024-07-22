import { CardsGame } from "./components/CardsGame";
import { useState } from "react";

function App() {
  // TODO: fetch 20 pokemon informations to state
  const [pokemonList, setPokemonList] = useState([
    {
      wasClicked: false,
      name: 'name1',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      wasClicked: false,
      name: 'name2',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      wasClicked: false,
      name: 'name3',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      wasClicked: false,
      name: 'name4',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
    {
      wasClicked: false,
      name: 'name5',
      imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      id: crypto.randomUUID()
    },
  ]);

  const markPokemon = (item) => {
    // TODO: create logic if button was clicked
    const newList = pokemonList.map(pokemon => pokemon.id === item.id ? { ...item, wasClicked: true } : pokemon);
    setPokemonList(newList);
    // create copy of array substitute element
    // and then apply for next render
  }

  return (
    <>
      <CardsGame cardsList={pokemonList} markCard={markPokemon} />
    </>
  );
}

export default App
