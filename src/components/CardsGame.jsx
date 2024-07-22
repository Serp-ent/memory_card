/* eslint-disable react/prop-types */
import { Card } from "./Card";
import '../styles/CardsGame.css'

export function CardsGame({ cardsList, markCard, score }) {
    return (
        <div className="cards-game">
            <header>
                <h1>Memory Game</h1>
                <p>Get points by clicking on an image but don&apos;t click on any more than once</p>
                <p>Current score {score}</p>
            </header>
            <div className="cards-container">
                <ul className="cards-list">
                    {cardsList.map(card => <Card key={card.id} item={card} onClick={() => markCard(card)} />)}
                </ul>

            </div>
        </div>
    );

}