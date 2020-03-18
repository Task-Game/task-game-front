import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react';
import image from  '../imagens/cadastro-image.jpg';
import { Link } from 'react-router-dom';
import api from '../routes/api'

class CadastroModal extends Component{


  constructor() {
    super();
    this.state = {
      "Usuario": 
        {
          "nome": "",
          "email": "",
          "senha": "",          
        }
      
    };
  }
  /*Função que pega os imputs do usuario e manda para o banco(falta a chamada da api)*/

  handleSignUp = async e =>{
    e.preventDefault();
    const { nome, email, senha } = this.state
    if (!nome || !email || !senha )  {
      alert("Deu ruim");
    } else {
      try{
    alert("Ta dando certo")
    await api.post("/api/v1.0/users", { nome, email, senha });
      }
      catch (err) {
        console.log(err);
        alert("Tem parada errada ai");
      }
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





