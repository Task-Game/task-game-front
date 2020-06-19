import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import SalesmanImage from '../imagens/salesman.jpg';

const shopModal = () => (
  <Modal trigger={<Button color="teal" circular >Criar item</Button>}>
    <Modal.Header>Vem sempre aqui?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={SalesmanImage} />
      <Modal.Description>

        <Header>Coloque um item a venda!</Header>

        <p>Nome do item</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira o nome do item" />
        <i aria-hidden="true" class="user icon"></i>
        </div>
        <p>Descrição do item</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira a descrição do item" />
        <i aria-hidden="true" class="user icon"></i>
        </div>
        <p>Preço</p>
        <div class="ui icon input">
         <input type="text" placeholder="Insira o preço do item" />
        <i aria-hidden="true" class="user icon"></i>
        </div>
        <p>Raridade</p>
        <div class="ui icon input">
         <input type="text" placeholder="Raridade" />
        <i aria-hidden="true" class="user icon"></i>
        </div>

       
        <Button color='teal' fluid>
         
          Logar!
          
          </Button>
       
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default shopModal;