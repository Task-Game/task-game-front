import React, { useEffect, useState } from "react";
import Menu from "./MainPageComponents/menu";
import Card from "./MainPageComponents/card";
import ImageChest2 from './imagens/shopChest2.jpg'
import api from './routes/api'


const TaskGame = () => {

  const [cards, setCards] = useState([]);
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    api.get("group/api/v1").then((response) => {
      const use = response.data.data;
      setGroups(use);
      console.log(use);
    });
  }, []);
  useEffect(() => {
    api.get("item/api/v1/").then((response) => {
      const use = response.data.data;
      setCards(use);
      console.log(use);
    });
  }, []);



  return (
    <>
      <Menu />
      <div className="all">
      { 
        cards.map((card) =>(
          <Card
          date="NOVIDADE!"
          title={card.nome}
          description={card.descricao}
          name={groups[card.Loja_idLoja].nome}
          price={card.valor}
          rarity="Preço!"
          image = {ImageChest2}
          cardType = "shop"
          buttomName = "Comprar!"
          display  ="none"
          key = {card.idItem}
          id = {card.Loja_idLoja}
        />
     
      ))
       
      }
          </div>
    </>
  );
};

export default TaskGame;
