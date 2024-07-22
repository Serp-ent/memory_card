/* eslint-disable react/prop-types */
import { Card } from "./Card";
import '../styles/CardsGame.css'

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

export function CardsGame({
    cardsList,
    markCard,
    score,
    highestScore
}) {
    const cards = shuffleArray(cardsList);
    return (
        <div className="cards-game">
            <header>
                <h1>Memory Game</h1>
                <p>Get points by clicking on an image but don&apos;t click on any more than once</p>
                <p>Current score {score}</p>
                <p>Highest score {highestScore}</p>
            </header>
            <div className="cards-container">
                <ul className="cards-list">
                    {cards.map(card => <Card key={card.id} item={card} onClick={() => markCard(card.id)} />)}
                </ul>

            </div>
        </div>
    );

}