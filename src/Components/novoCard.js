import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import '../css/menuPrincipal.css'


const ModalModalExample = () => (
  <Modal trigger={<Button>Nova Tarefa</Button>}>
      <Modal id='botaoFoto' trigger={<Button>Escolha uma foto</Button>}></Modal>
    

    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
      <form class="ui form">
  <div class="field">
    <label>Nome do Projeto</label>
    <input placeholder="Nome do projeto" />
  </div>
  <div class="field">
    <label>Membros</label>
    <input placeholder="Membros" />
  </div>
  <div class="field">
    <label>Prazo</label>
    <input placeholder="Prazo de entrega" />
  </div>
  <div class="field">
    <label>Valor</label>
    <input placeholder="Valor" />
  </div>
  <div class="field">
    <label>Descrição</label>
    <input placeholder="Descrição" />
  </div>
  
  <button type="submit" class="ui button">Criar</button>
</form>
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
