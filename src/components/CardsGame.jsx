/* eslint-disable react/prop-types */
import { Card } from "./Card";
import '../styles/CardsGame.css'

export function CardsGame({ cardsList }) {
    return (
        <div className="cards-game">
            <header>
                <h1>Memory Game</h1>
                <p>Get points by clicking on an image but don&apos;t click on any more than once</p>
            </header>
            <div className="cards-container">
                <ul className="cards-list">
                    {cardsList.map(card => <Card key={card.id} item={card} />)}
                </ul>

            </div>
        </div>
    );

}