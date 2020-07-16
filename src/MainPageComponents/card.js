<<<<<<< HEAD
import React from 'react';
import '../css/mainPage/card.css';
import Modal from "./button.js";

function Card(props) {

    function concluirTarefa(){
        //post perfil = perfil +  price
        //delete tarefa
        alert("Meus parabens! foi adicionado " + props.price + "g a sua conta" )
      }

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
                        <button className="type readybutton" onClick={concluirTarefa}>Entregar</button>
                    </div>
                </div>                
=======
import React from "react";
import "../css/mainPage/card.css";

function Card(props) {
  //função chamada ao concluir a tarefa
  function concluirTarefa() {
    //post perfilprice = perfilprice +  price
    //delete tarefa
    alert("Meus parabens! foi adicionado " + props.price + "g a sua conta");
  }

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
>>>>>>> c10fe067f484e7d65d193a1059aaafc400e08939
            </div>
            <div className="stat">
              <div className="valor">Por</div>
              <div className="type">{props.name}</div>
            </div>
            <div className="stat">
              <button className="type readybutton" onClick={concluirTarefa}>
                Entregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
