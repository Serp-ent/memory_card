import { CardsGame } from "./components/CardsGame";
import { useState } from "react";

function App() {
  // TODO: fetch 20 pokemon informations to state
  const [currentScore, setCurrentScore] = useState(0);
  const [alreadyMarked, setAlreadyMarked] = useState(new Set());

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

  const markPokemon = (item) => {
    if (alreadyMarked.has(item.id)) {
      setAlreadyMarked(new Set());
      setCurrentScore(0);
      return;
    }

    const newSet = new Set(alreadyMarked);
    newSet.add(item.id);

    setAlreadyMarked(newSet);
    setCurrentScore(score => score + 1);
  }

  return (
    <>
      <CardsGame
        cardsList={pokemonList}
        markCard={markPokemon}
        score={currentScore}
      />
    </>
  );
}

export default App
