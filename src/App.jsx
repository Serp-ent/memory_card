import { CardsGame } from "./components/CardsGame";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  // TODO: fetch 20 pokemon informations to state
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(currentScore);
  const [alreadyMarked, setAlreadyMarked] = useState(new Set());

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const fetchedPokemons = [];

      for (let i = 1; i <= 20; ++i) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const pokemon = await response.json();

          console.log(pokemon);
          const importantPokemonInfo = {
            id: pokemon.id,
            name: pokemon.name,
            imgUrl: pokemon.sprites.other.dream_world.front_default,
          };

          fetchedPokemons.push(importantPokemonInfo);
        } catch (error) {
          console.log(`Error fetching pokemon data: ${error}`);
        }
      }


      setPokemonList(fetchedPokemons);
    }

    fetchPokemonData();
  }, []);

  const markPokemon = (id) => {
    if (alreadyMarked.has(id)) {
      setAlreadyMarked(new Set());
      setCurrentScore(0);
      return;
    }

    const newSet = new Set(alreadyMarked);
    newSet.add(id);

    setAlreadyMarked(newSet);

    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    if (newScore > highestScore) {
      setHighestScore(newScore);
    }
  }

  return (
    <>
      <CardsGame
        cardsList={pokemonList}
        markCard={markPokemon}
        score={currentScore}
        highestScore={highestScore}
      />
    </>
  );
}

export default App
