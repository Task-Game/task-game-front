import React, { useState, useEffect } from "react";
import Card from "./MainPageComponents/card";
import Menu from "./MainPageComponents/menu";
import comumCard from './imagens/comumTask.png'
import epicCard from './imagens/todo-image1.png'
import legendaryCard from './imagens/legendaryTask.png'
import incomumCard from './imagens/incomumTask.png'
import rareCard from './imagens/rareTask.png'

const Tarefas = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //get
  }, []);

  function defineColor(raridade){
    if(raridade === "comum") return "gray"   
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
        // remover linha de baixo quando for fazer o map :v
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
        />
        </div>
        </>
      }
      
    </>
  );
};
export default Tarefas;
