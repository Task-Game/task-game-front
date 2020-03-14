import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import image from  '../imagens/cadastro-image.jpg';
import { Link } from 'react-router-dom';

class CadastroModal extends Component{


  constructor() {
    super();
    this.state = {
      "novoUsuario": 
        {
          "nome": "",
          "email": "",
          "senha": "",          
        }
      
    };
  }
  /*Função que pega os imputs do usuario e manda para o banco(falta a chamada da api)*/

  handleSignUp = e =>{
    e.preventDefault();
    const { nome, email, senha } = this.state
    if (!nome || !email || !senha) {
      alert("Deu ruim");
    }

    else{alert("Ta dando certo")
    console.log(this.state)
  }};



  render(){
    return(

  <Modal trigger={<Button inverted circular>Cadastre-se!</Button>}>

    <Modal.Header>Esta pronto para essa aventura?</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={image} />
      <Modal.Description>

        <Header>Insira seus melhores dados!</Header>


        <Form onSubmit={this.handleSignUp}>

    <Form.Field>
      <label>Insira seu nome</label>
      <input placeholder='TaskGame' 
      onChange={e => this.setState({ nome: e.target.value })}/>
      
    </Form.Field>

    <Form.Field>
      <label>Insira seu Email!</label>
      <input placeholder='tcctaskgame@gmail.com'
      onChange={e => this.setState({ email: e.target.value })} />
      

    </Form.Field>

    <Form.Field>
      <label>Insira uma senha!</label>
      <input placeholder='Its_s3cret!!' 
       onChange={e => this.setState({ senha: e.target.value })}/>
     

    </Form.Field>
      
    <Button color='teal'
     fluid type='submit'         
     >
       Bora!</Button>
    </Form>

        
       
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
  
    )
  }
}

export default CadastroModal;




