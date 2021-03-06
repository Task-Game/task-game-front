import React from "react";
import "../css/mainPage/card.css";
import TarefaModal from "../MainPageComponents/tarefaModal";
import ShopModal from '../MainPageComponents/shopModal';


function GroupCard(props) {
  return (
    <>
    
        <div className="card">
          <div className="card-imagegroup "></div>
          <div className="card-text">
            <span className="date">{props.date}</span>
            <h2>{props.title}</h2>
            <p>{props.description}  </p>
            <ShopModal />
          </div>
          <div className="card-stats" style={{ backgroundColor: "#00CED1" }}>
            <div className="stat">
              <div className="valor">{props.members}</div>
              <div className="type">Membros</div>
            </div>
            <div className="stat">
              <div className="valor">Líder</div>
              <div className="type">{props.name}</div>
            </div>
            <div className="stat">
              <TarefaModal />
            </div>
          </div>
        </div>
        </>
  );
}

export default GroupCard;
