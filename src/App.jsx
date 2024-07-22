import { CardsGame } from "./components/CardsGame";
import { useState } from "react";

function App() {
  // TODO: fetch 20 pokemon informations to state
  const [pokemonList, setPokemonList] = useState([
    { name: 'name1', imgUrl: null, id: crypto.randomUUID() },
    { name: 'name2', imgUrl: null, id: crypto.randomUUID() },
    { name: 'name3', imgUrl: null, id: crypto.randomUUID() },
    { name: 'name4', imgUrl: null, id: crypto.randomUUID() },
    { name: 'name5', imgUrl: null, id: crypto.randomUUID() },
  ]);
  return (
    <>
      <CardsGame cardsList={pokemonList} />
    </>
  );
}

export default App
