import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import image from "../imagens/cadastro-image.jpg";
import api from "../routes/api";

class Cadastro extends Component {
  //cria o estado do componente, ou sua variaveis que serão funcionais 
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      "novoUsuario": 
        {
          "nome": "",
          "email": "",
          "senha": "", 
          "empresa":"",
          "dataNascimento": "",
          
        }
      
=======
      novoUsuario: {
        nome: "",
        email: "",
        senha: "",
        empresa: "",
      },
>>>>>>> c10fe067f484e7d65d193a1059aaafc400e08939
    };
  }
  /*Função que pega os imputs do usuario e manda para a api */

<<<<<<< HEAD

  handleSignUp = e =>{
=======
  handleSignUp = (e) => {
>>>>>>> c10fe067f484e7d65d193a1059aaafc400e08939
    e.preventDefault();
    const { nome, email, empresa, dataNascimento, senha } = this.state;
    if (!nome || !email || !senha || !dataNascimento || !empresa) {
      alert("Deu ruim");
    } else {
      alert("Ta dando certo");
      console.log(this.state);
      api.post("login", this.state);
    }
<<<<<<< HEAD

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
=======
  };

  render() {
    return (
      <Modal
        trigger={
          <Button inverted circular>
            Cadastre-se!
          </Button>
        }
      >
        <Modal.Header>Esta pronto para essa aventura?</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={image} />
          <Modal.Description>
            <Header>Insira seus melhores dados!</Header>

            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Insira seu nome</label>
                <input
                  type="text"
                  placeholder="TaskGame"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Insira seu Email!</label>
                <input
                  type="email"
                  placeholder="tcctaskgame@gmail.com"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Qual empresa você trabalha</label>
                <input
                  type="text"
                  placeholder="TaskGame Etecia"
                  onChange={(e) => this.setState({ empresa: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Insira uma senha!</label>
                <input
                  type="password"
                  placeholder="Its_s3cret!!"
                  onChange={(e) => this.setState({ senha: e.target.value })}
                />
              </Form.Field>

              <Button color="teal" fluid type="submit">
                Bora!
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
>>>>>>> c10fe067f484e7d65d193a1059aaafc400e08939
  }
}

export default Cadastro;
