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
      const use = response.data;
      setCards(use);
      console.log(use);
    });
  }, []);

  function defineColor(raridade){
    if(raridade === "comum") return "#808080"   
    else if(raridade === "incomum") return "#0ed145"
    else if(raridade === "raro") return "#4f4fff"
    else if(raridade === "epico") return "#ff4fff"
    else if(raridade === "lendario") return "#ffad14"
  }
  function defineImage(raridade){
    if(raridade === "comum") return comumCard   
    else if(raridade === "incomum") return incomumCard
    else if(raridade === "raro") return rareCard
    else if(raridade === "epico") return epicCard
    else if(raridade === "lendario") return legendaryCard
  }

  return (
    <>
      <Menu />
    
      {
        //cards.map
        // remover linha a baixo e 4 cards quando for fazer o map :v
        <>
         <div className="all">
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="comum"
          color={defineColor("comum")}
          image ={defineImage("comum")}
          cardType = "tarefa"
          buttomName = "Entregar"
        />
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="incomum"
          color={defineColor("incomum")}
          image ={defineImage("incomum")}
          cardType = "tarefa"
          buttomName = "Entregar"
        />
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="raro"
          color={defineColor("raro")}
          image ={defineImage("raro")}
          cardType = "tarefa"
          buttomName = "Entregar"
        />
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="epico"
          color={defineColor("epico")}
          image ={defineImage("epico")}
          cardType = "tarefa"
          buttomName = "Entregar"
        />
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="lendario"
          color={defineColor("lendario")}
          image ={defineImage("lendario")}
          cardType = "tarefa"
          buttomName = "Entregar"
        />
        </div>
        </>
      }
      
    </>
  );
};
export default Tarefas;
