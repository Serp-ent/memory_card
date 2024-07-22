/* eslint-disable react/prop-types */
import '../styles/Card.css'

export function Card({ item }) {
    return (
        <li>
            <button>
                <div className='card-item'>
                    <div>
                        <img className='card-img' src={item.imgUrl} />
                    </div>
                    <div className='card-label'>
                        <h6>{item.name}</h6>
                    </div>
                </div>
            </button>
        </li>
    );
}