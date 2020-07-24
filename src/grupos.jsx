import React, { useEffect, useState, useContext } from "react";
import Menu from "./MainPageComponents/menu";
import "./css/mainPage/menuPrincipal.css";
import GroupCard from "./MainPageComponents/groupcard";
import CreateGroup from "./MainPageComponents/createGroup";
import GroupModal from "./MainPageComponents/groupModal";
import api from "./routes/api";
import User from "./routes/auth";

const Grupos = () => {
  const [cards, setCards] = useState(["1","2"]);
  const [codes, setCodes] = useState({ code: "" });
  const [stats, setStats] = useState([]);
  const UserId = useContext(User);

  

  useEffect(() => {
    api.get("group/api/v1/group").then(response => {
      console.log(response.data.data)
      const use = response.data.data;
      setCards(use);
      console.log(use);
    });
  }, []);

  useEffect(() => {
    api.get(`user/api/v1/user/${UserId.token}`).then((response) => {
      const use = response.data;
      setStats(use);
      console.log(use);
     
    });
  }, []);

  function onSubmit(event) {
    event.preventDefault();
    const code = codes;
    //envia o codigo para algum lugar após ele digitar(é aqui que o post fica)
    return console.log(code);
  }

  function onChange(event) {
    //pega o codigo que o usuario digita
    const { value } = event.target;
    setCodes({ code: value });
    console.log(codes);
  }

 /* if (cards.data === [""] || 0) {
    return (
      <>
        <Menu />
        <CreateGroup />
        <GroupModal />

        <form onSubmit={onSubmit}>
          <div className="no-group">
            <p>
              Parece que você não esta em nenhum grupo, digita aqui o codigo de
              um ou crie um lá em cima!
            </p>

            <input
              type="text"
              placeholder="Digite o codigo aqui"
              name="code"
              onChange={onChange}
            ></input>
            <br />

            <Button>Confirmar!</Button>
          </div>
        </form>
      </>
    );
  } */
  return (
    <>
      <Menu />
      <CreateGroup />
      <GroupModal />
      <div className="all">
      {
      
       cards.map((card) => (
          <GroupCard
          key={card.idGrupo}
          title={card.nome}
          date={"#"+card.idGrupo}
          description={card.descricao}
          name={stats.nome}
          members="5"
        />
       ))
    
      }
         </div>
    
    </>
  );
};
export default Grupos;
