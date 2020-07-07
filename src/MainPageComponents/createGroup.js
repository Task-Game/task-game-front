import React,{ Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import GuildImage from '../imagens/guildman.jpg';

export default class shopModal extends Component {
  constructor() {
    super();
    this.state = {
      "novoGrupo": 
        {
          "nome": "",
          "descricao": "",
        }
      
    };
  }

  handleSignUp = e =>{
    e.preventDefault();
    const { nome, descricao} = this.state
    if (!nome || !descricao ) {
      alert("Deu ruim");
      console.log(this.state)
    }

    else{alert("Ta dando certo");
    console.log(this.state)
  }};


  render(){
    return(

      <Modal trigger={<Button inverted circular>Novo grupo</Button>}>

    <Modal.Header>Hm, você é novo por aqui</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={GuildImage} />
      <Modal.Description>
        <Header>Qual é o nome do grupo, projeto ou empresa?</Header>

        <Form onSubmit={this.handleSignUp}>

    <Form.Field>
      <label>Qual o nome do item</label>
      <input type="text" placeholder='TaskGame' 
      onChange={e => this.setState({ nome: e.target.value })}/>   
    </Form.Field>

    <Form.Field>
      <label>Descrição</label>
      <input type="text" placeholder='The best group in the world!!'
      onChange={e => this.setState({ descricao: e.target.value })} />
    </Form.Field>
      
    <Button color='teal'
     fluid type='submit'         
     >
       Criar!
       </Button>
    </Form>

        
       
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
    )
  }
}
