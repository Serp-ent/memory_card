/* eslint-disable react/prop-types */
import '../styles/Card.css'

export function Card({ item }) {
    return (
        <li>
            <button>
                <div className='card-item'>
                    <div className='card-img-wrapper'>
                        <img className='card-img' src={item.imgUrl} />
                        <div className='pokeball-button'>
                            <div className='pokeball-button-inneR'></div>
                        </div>
                    </div>
                    <div className='card-label'>
                        <h6>{item.name}</h6>
                    </div>
                </div>
            </button>
        </li>
    );
}