import React, { useEffect, useState } from "react";
import Menu from "./MainPageComponents/menu";
import Card from "./MainPageComponents/card";
import ImageChest2 from './imagens/shopChest2.jpg'


const TaskGame = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //get
  }, []);

  return (
    <>
      <Menu />
      {
        //cards.map
        <div className="all">
        <Card
          date="NOVIDADE!"
          title="Lista de tarefas"
          description="Uma simples lista de tarefa"
          name="Nathalia"
          price="5"
          rarity="comum"
          image = {ImageChest2}
          cardType =  "shop"
          buttomName = "Comprar!"
        />
        </div>
      }
    </>
  );
};

export default TaskGame;
