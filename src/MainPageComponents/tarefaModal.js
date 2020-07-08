import React,{ Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import tarefagirl from '../imagens/criartarefa.jpg';

export default class shopModal extends Component {
  constructor() {
    super();
    this.state = {
      "novoItem": 
        {
          "nome": "",
          "descricao": "",
          "valor": "", 
          "raridade":"",
          "prazo":"",
        }
      
    };
  }

  handleSignUp = e =>{
    e.preventDefault();
    const { nome, descricao, valor, raridade, prazo} = this.state
    if (!nome || !descricao || !valor || !raridade || !prazo ) {
      alert("Deu ruim");
      console.log(this.state)
    }

    else{alert("Ta dando certo");
    console.log(this.state)
  }};


  render(){
    return(

      <Modal trigger={<Button  color='blue' circular>Nova Tarefa!</Button>}>

    <Modal.Header>Criar Tarefas</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={tarefagirl} />
      <Modal.Description>

        <Header>Uma tarefa? Espero que não pegue tão leve</Header>


        <Form onSubmit={this.handleSignUp}>

    <Form.Field>
      <label>Titulo</label>
      <input type="text" placeholder='Envelopes' 
      onChange={e => this.setState({ nome: e.target.value })}/>   
    </Form.Field>

    <Form.Field>
      <label>Descrição</label>
      <input type="text" placeholder='Entregar os envelopes na diretoria'
      onChange={e => this.setState({ descricao: e.target.value })} />
    </Form.Field>

    <Form.Field>
      <label>Quanto ele vale</label>
      <input type="text" placeholder='200' 
      onChange={e => this.setState({ valor: e.target.value })}/>
      
    </Form.Field>


    
    <Form.Field>
      <label>E sua raridade</label>
      <input type = "text" placeholder='Lendario!!' 
       onChange={e => this.setState({ raridade: e.target.value })}/>
     

    </Form.Field>

    <Form.Field>
      <label>Até quando pode ser feito?</label>
      <input type="date" placeholder='00/00/0000' 
      onChange={e => this.setState({ prazo: e.target.value })}/>
      
    </Form.Field>
      
    <Button color='teal'
     fluid type='submit'         
     >
       Bora!
       </Button>
    </Form>

        
       
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
    )
  }
}

