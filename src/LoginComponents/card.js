import React from 'react';
import '../css/card.css';

function Card() {

    return (
        <>

            <div class="card">
                <div class="card-image"></div>
                <div class="card-text">
                    <span class="date">31/05</span>
                    <h2>Fazer a tarefa</h2>
                    <p>Uma atividade simples de fazer um card</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="valor">9g</div>
                        <div class="type">Incomum</div>
                    </div>
                    <div class="stat">
                        <div class="valor">Por</div>
                        <div class="type">Pedro</div>
                    </div>
                    <div class="stat">
                        <button class="type readybutton">Entregar</button>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Card;