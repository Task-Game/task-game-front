import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import image from  '../imagens/cadastro-image.jpg';
import api from '../routes/api';
import axios from 'axios';

class Cadastro extends Component{


  constructor() {
    super();
    this.state = {
      "novoUsuario": 
        {
          "nome": "",
          "email": "",
          "senha": "", 
          "empresa":"",
          "dataNascimento": "",
          
        }
      
    };
  }
  /*Função que pega os imputs do usuario e manda para o banco(falta a chamada da api)*/


  handleSignUp = e =>{
    e.preventDefault();
    const { nome, email, empresa, dataNascimento, senha } = this.state
    if (!nome || !email || !senha || !dataNascimento || !empresa) {
      alert("Deu ruim");
    }

    else{alert("Ta dando certo");
    console.log(this.state);
    api.post('login', this.state)
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
      <input type="text" placeholder='TaskGame' 
      onChange={e => this.setState({ nome: e.target.value })}/>
      
    </Form.Field>

    <Form.Field>
      <label>Insira seu Email!</label>
      <input type="email" placeholder='tcctaskgame@gmail.com'
      onChange={e => this.setState({ email: e.target.value })} />
      

    </Form.Field>

    <Form.Field>
      <label>Qual empresa você trabalha</label>
      <input type="text" placeholder='TaskGame Etecia' 
      onChange={e => this.setState({ empresa: e.target.value })}/>
      
    </Form.Field>

    <Form.Field>
      <label>Data de Nascimento</label>
      <input type="date" placeholder='00/00/0000' 
      onChange={e => this.setState({ dataNascimento: e.target.value })}/>
      
    </Form.Field>

    
    <Form.Field>
      <label>Insira uma senha!</label>
      <input type = "password" placeholder='Its_s3cret!!' 
       onChange={e => this.setState({ senha: e.target.value })}/>
     

    </Form.Field>

  

    <Form.Field>
    <label>Você é:</label>
    <input type="checkbox" 
         />
  <label for="scales">Líder</label>
  <input type="checkbox" />
  <label for="horns">Desenvolverdor</label>
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



export default Cadastro;




