import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import image from  '../imagens/cadastro-image.jpg';


const ModalModalExample = () => (
  <Modal trigger={<Button inverted circular>Cadastre-se!</Button>}>
    <Modal.Header>Esta pronto para essa aventura?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={image} />
      <Modal.Description>

        <Header>Insira seus melhores dados!</Header>

        <p>Nome</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira seu nome" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

        <p>Email</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira seu email" />
        <i aria-hidden="true" class="address card icon"></i>
        </div>

        <p>Senha</p>
        <div class="ui icon input">
         <input type="text" placeholder="Não deixe ninguem ver" />
        <i aria-hidden="true" class="shield alternate icon"></i>
        </div>
        
        <Button color='teal' fluid>Cadastrar</Button>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
