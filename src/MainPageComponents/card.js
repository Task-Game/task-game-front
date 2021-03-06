import React, { useContext, useState , useEffect } from "react";
import "../css/mainPage/card.css";
import { Button} from "semantic-ui-react";
import CheckList from './checklistModal';
import api from '../routes/api';
import User from "../routes/auth";




const Card = (props) => {
  const UserId = useContext(User);
  const [stats, setStats] = useState([]);

  
  useEffect(() => {
    api.get(`user/api/v1/${UserId.token}`).then((response) => {
      const use = response.data;
      setStats(use);
      console.log(use);
     
    });
  }, []);

  //função chamada ao concluir a tarefa
  function concluirTarefa(recompensa,IDTarefa, UserID, UserCreditos) {
    console.log(UserID)
    api.patch(`user/api/v1/${UserID.token}`,  {"credito": recompensa + UserCreditos});
    api.delete(`/task/api/v1/${IDTarefa}`)
    console.log(recompensa)
    //tarefa = true
    alert("Meus parabens! foi adicionado " + props.price + "g a sua conta");
  }


  function comprarItem(recompensa, UserID, UserCreditos) {
    api.patch(`user/api/v1/${UserID.token}`,  {"credito":  UserCreditos - recompensa});
    alert(`Meus parabens! foi adicionado "` + props.title + `" a sua conta`);
  }

  function cardType(cardType) {
    if (cardType === "tarefa") return concluirTarefa(props.price, props.id, UserId, stats.credito);
    else if (cardType === "shop") return comprarItem(props.price, UserId, stats.credito);
  }

  function cardImage(backgroundImages) {
    return {
      gridArea: "image",
      backgroundImage: "url(" + backgroundImages + ")",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundSize: "cover",
    };
  }
  function setRarityName(raridade){
    if(raridade === 1) return "Comum"   
    else if(raridade === 2) return "Incomum";
    else if(raridade === 3) return "Raro";
    else if(raridade === 4) return "Épico!";
    else if(raridade === 5) return "Lendário!!";
    else return raridade;
  }

  return (
    <>
      <div className="card">
        <div className="card-image" style={cardImage(props.image)}></div>
        <div className="card-text">
          <span className="date">{props.date}</span>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <CheckList
          color = {props.color}
          display ={props.display} />
        </div>

        <div className="card-stats" style={{ background: props.color }}>
          <div className="stat">
            <div className="valor">{props.price}c</div>
            <div className="type">{setRarityName(props.rarity)}</div>
          </div>
          <div className="stat">
            <div className="valor">Por</div>
            <div className="type">{props.name}</div>
          </div>
          <div className="stat">
            <Button onClick={() => cardType(props.cardType)}>           
              {props.buttomName}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
