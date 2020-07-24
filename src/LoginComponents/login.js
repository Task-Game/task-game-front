import React, { useState, useContext, useEffect } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import image from "../imagens/login-image.jpg";
import { useHistory } from "react-router-dom";
import User from "../routes/auth";
import api from "../routes/api";


//função que deixa o usuario e senha no padrão(sem nada)


function initialState() {
  return { nome: "", senha: "" };
}


/*quando ela é chamada, compara os dois parametros que recebeu e se tiver tudo certo, ira gerar um token
 os detalhes estão no arquivo provider e auth da pasta routes, o "+1" no final do token é porque o o id do usuario + 1(do array) */
function login({ nome, senha }, users) {
  var x = 0;
  
  while (x < users.data.length){
    if (nome === users.data[x].nome && senha === users.data[x].senha) {
      return { token: users.data[x].idUsuario };
    } x = x + 1;
  }
    return { error: "usuario ou senha invalidos \ntente novamente" };
}

const UserLogin = () => {
  //criação do estado dessa parte, dessa vez usando um dos hooks(useState) do react
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(User);
  const history = useHistory();
  const [users, setUsers] = useState([]);


useEffect(() => {
  api.get("user/api/v1/user").then(response =>{  
    const use = response.data
    setUsers(use);
    console.log(use)
  }
  )
},[])

  //auto explicativo :v
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }


  //pega as informações do onChange, chama a função login que retornara o token para o usuario ser feliz, o setToken é um componente global
  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values, users);


    if (token) {
      setToken(token);
      return history.push("/tarefas");
    }
    alert(error);
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
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Insira seu nome"
                  onChange={onChange}
                  name="nome"
                  values={values.nome}
                />
                <i aria-hidden="true" className="user icon"></i>
              </div>
            </Form.Field>

            <Form.Field>
              <label>Senha</label>
              <div className="ui icon input">
                <input
                  type="password"
                  placeholder="Não deixe ninguem ver"
                  onChange={onChange}
                  name="senha"
                  values={values.senha}
                />
                <i aria-hidden="true" className="shield alternate icon"></i>
              </div>
            </Form.Field>

            <Button color="teal" fluid style={{ color: "#fff" }}>
              Logar!
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default UserLogin;
