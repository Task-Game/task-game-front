import React, { useState, useEffect } from "react";
import Card from "./MainPageComponents/card";
import Menu from "./MainPageComponents/menu";

const Tarefas = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //get
  }, []);

  return (
    <>
      <Menu />
      {
        //cards.map
        <Card
          date="31/07"
          title="Tarefa"
          description="Uma simples tarefa de fazer um card"
          name="Pedro"
          price="9"
          rarity="incomum"
        />
      }
    </>
  );
};
export default Tarefas;
