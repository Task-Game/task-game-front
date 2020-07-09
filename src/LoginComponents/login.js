import React, { useState, useContext } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import image from "../imagens/login-image.jpg";
import { useHistory } from "react-router-dom";
import User from '../routes/auth';



function initialState() {
  return { nome: "", senha: "" };
}

function login({ nome, senha }){
  if(nome === "teste" && senha === "123"){
    return { token: '123'};
  }
  return {error: "usuario ou senha invalidos \ntente novamente"};
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(User);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }




  function onSubmit(event){
    event.preventDefault();
    const { token, error } = login(values);

    if (token){
      setToken(token);
      return history.push('/tarefas');
    }
    alert(error)
    setValues(initialState);
  }

  return (
    <Modal
      trigger={
        <Button inverted circular>
          Login
        </Button>
      }
    >
      <Modal.Header>Bem vindo de volta! Ou sera que não?</Modal.Header>

     

      <Modal.Content image>
        <Image wrapped size="medium" src={image} />
        <Modal.Description>
          <Header>Jogue seus dados! </Header>

          <Form onSubmit={onSubmit}>

          <Form.Field>
          <label>Nome</label>
          <div class="ui icon input">
            <input
              type="text"
              placeholder="Insira seu nome"
              onChange={onChange}
              name="nome"
              values={values.nome}
            />
            <i aria-hidden="true" class="user icon"></i>
          </div>
          </Form.Field>

          <Form.Field>
          <label>Senha</label>
          <div class="ui icon input">
            <input
              type="password"
              placeholder="Não deixe ninguem ver"
              onChange={onChange}
              name="senha"
              values={values.senha}
            />
            <i aria-hidden="true" class="shield alternate icon"></i>
          </div>

          </Form.Field>
            <Button color="teal" fluid  style={{ color: "#fff" }}>
              Logar!
            </Button>
           
          </Form>

        </Modal.Description>
      </Modal.Content>
    
    </Modal>
  );
};

export default UserLogin;
