import React, { useEffect, useState } from "react";
import Menu from "./MainPageComponents/menu";
import Card from "./MainPageComponents/card";
import ShopModal from "./MainPageComponents/shopModal";


const TaskGame = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //get
  }, []);

  return (
    <>
      <Menu />
      <ShopModal />
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
        />
        </div>
      }
    </>
  );
};

export default TaskGame;
