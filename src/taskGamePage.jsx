import React, { useState, useEffect } from "react";
import Card from "./MainPageComponents/card";
import Menu from "./MainPageComponents/menu";
import comumCard from './imagens/comumTask.png'
import epicCard from './imagens/epicTask.png'
import legendaryCard from './imagens/legendaryTask.png'
import incomumCard from './imagens/incomumTask.png'
import rareCard from './imagens/rareTask.png'
import api from "./routes/api";

const Tarefas = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.get("task/api/v1/task").then((response) => {
      const use = response.data.data;
      setCards(use);
      console.log(use);
    });
  }, []);

  function defineColor(raridade){
    if(raridade === 1) return "#808080"   
    else if(raridade === 2) return "#0ed145"
    else if(raridade === 3) return "#4f4fff"
    else if(raridade === 4) return "#ff4fff"
    else if(raridade === 5) return "#ffad14"
  }
  function defineImage(raridade){
    if(raridade === 1) return comumCard   
    else if(raridade === 2) return incomumCard
    else if(raridade === 3) return rareCard
    else if(raridade === 4) return epicCard
    else if(raridade === 5) return legendaryCard
  }
  function definePrice(raridade){
    if(raridade === 1) return "50"   
    else if(raridade === 2) return "150"
    else if(raridade === 3) return "500"
    else if(raridade === 4) return "800"
    else if(raridade === 5) return "1000"
  }

  return (
    <>
      <Menu />
      <div className="all">
      {cards.map((card) => (
        
        
        <Card
          date={card.prazo}
          title={card.nome}
          description={card.descricao}
          name={"Pedro"}
          price={definePrice(card.Raridade_idRaridade)}
          rarity={card.Raridade_idRaridade}
          color={defineColor(card.Raridade_idRaridade)}
          image ={defineImage(card.Raridade_idRaridade)}
          cardType = "tarefa"
          buttomName = "Entregar"
          key={card.idTarefa}
          id={card.idTarefa}
        />
       
      ))
      }
       </div>
    </>
);
};
export default Tarefas;
