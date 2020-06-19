import React from 'react';
import '../css/mainPage/card.css';

function Card(props) {

    return (
        <>
            <div className="all">

            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <span className="date">{props.date}</span>
                            <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="valor">{props.price}g</div>
                        <div className="type">{props.rarity}</div>
                    </div>
                    <div className="stat">
                        <div className="valor">Por</div>
                        <div className="type">{props.name}</div>
                    </div>
                    <div className="stat">
                        <button className="type readybutton">Entregar</button>
                    </div>
                </div>                
            </div>
            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <span className="date">{props.date}</span>
                            <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="valor">{props.price}g</div>
                        <div className="type">{props.rarity}</div>
                    </div>
                    <div className="stat">
                        <div className="valor">Por</div>
                        <div className="type">{props.name}</div>
                    </div>
                    <div className="stat">
                        <button className="type readybutton">Entregar</button>
                    </div>
                </div>                
            </div>
            <div className="card">
                <div className="card-image"></div>
                <div className="card-text">
                    <span className="date">{props.date}</span>
                            <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <div className="valor">{props.price}g</div>
                        <div className="type">{props.rarity}</div>
                    </div>
                    <div className="stat">
                        <div className="valor">Por</div>
                        <div className="type">{props.name}</div>
                    </div>
                    <div className="stat">
                        <button className="type readybutton">Entregar</button>
                    </div>
                </div>                
            </div>
            
            </div>
        </>

    )
}


export default Card;