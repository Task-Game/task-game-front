import React, { useEffect, useState } from "react";
import Menu from "./MainPageComponents/menu";
import "./css/mainPage/menuPrincipal.css";
import GroupCard from "./MainPageComponents/groupcard";
import CreateGroup from "./MainPageComponents/createGroup";
import GroupModal from "./MainPageComponents/groupModal";

const Grupos = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //get
  }, []);
  return (
    <>
      <Menu />
      <CreateGroup />
      <GroupModal />
      {
        //cards.map
        <GroupCard
          title="TaskGame"
          description="Um grupo de estudantes que faz coisas incriveis!"
          name="João"
          members="5"
        />
      }
    </>
  );
};
export default Grupos;
