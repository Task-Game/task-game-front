import React,{ useState } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import image from  '../imagens/login-image.jpg';
import { Link } from 'react-router-dom';

function initialState(){
  return{ nome: "", senha: ""}
}

const LoginModal = () => {
  const [values, setValues] = useState(initialState);


  <Modal trigger={<Button inverted circular>Login</Button>}>
    <Modal.Header>Bem vindo de volta! Ou sera que não?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={image} />
      <Modal.Description>

        <Header>Jogue seus dados! </Header>

        <p>Nome</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira seu nome" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

        <p>Senha</p>
        <div class="ui icon input">
         <input type="password" placeholder="Não deixe ninguem ver" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>
        <Link to = "/tarefas" style = {{color:'#fff' }} > 
        <Button color='teal' fluid>
         
          Logar!
          
          </Button>
        </Link>

      </Modal.Description>
    </Modal.Content>
  </Modal>
}

export default LoginModal