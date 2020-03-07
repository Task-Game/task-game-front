import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
import codigo from '../imagens/codigo.jpg';
import '../css/menuPrincipal.css';

const CardExampleCard = () => (
  <Card >
    <Card.Content>
      <Card.Content>
<Image id='fotoDoProjeto' src={codigo}/>
</Card.Content>
      <Card.Header>Nome do projeto</Card.Header>
      <Card.Meta>
        <span className='date'>Iniciado em  2015</span>
      </Card.Meta>
      <Card.Content>Membros do projeto:  </Card.Content>
      <Card.Content>Prazo</Card.Content>
      <Card.Content>Valor</Card.Content>
      <Card.Content>Suas Tarefas</Card.Content>
      <Card.Content>Tags</Card.Content>

      <Card.Description> Descriçao do projeto: </Card.Description>
    </Card.Content>
    <Card.Content>
    <Button>Ver mais</Button>
    </Card.Content>
  </Card>
)


export default CardExampleCard