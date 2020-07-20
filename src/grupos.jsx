import React, { useEffect, useState } from "react";
import Menu from "./MainPageComponents/menu";
import "./css/mainPage/menuPrincipal.css";
import GroupCard from "./MainPageComponents/groupcard";
import CreateGroup from "./MainPageComponents/createGroup";
import GroupModal from "./MainPageComponents/groupModal";
import { Button } from "semantic-ui-react";
import api from "./routes/api";

const Grupos = () => {
  const [cards, setCards] = useState([]);
  const [codes, setCodes] = useState({ code: "" });

  useEffect(() => {
    api.get("group/api/v1/group").then((response) => {
      const use = response.data;
      setCards(use);
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

  if (cards === [""]) {
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
  }
  return (
    <>
      <Menu />
      <CreateGroup />
      <GroupModal />

      {
        //cards.map
        <GroupCard
          title="TaskGame"
          date="Code"
          description="Um grupo de estudantes que faz coisas incriveis!"
          name="João"
          members="5"
        />
      }
    </>
  );
};
export default Grupos;
