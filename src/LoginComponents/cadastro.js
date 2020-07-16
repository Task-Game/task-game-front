import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import image from "../imagens/cadastro-image.jpg";
import api from "../routes/api";



class Cadastro extends Component {
  //cria o estado do componente, ou sua variaveis que serão funcionais 
  constructor() {
    super();
    this.state = {
      data: {
        nome: "",
        email: "",
        cargo: "",
        senha: ""
        
      },
    };
  }
  /*Função que pega os imputs do usuario e manda para a api */

  handleSignUp = (e) => {
    e.preventDefault();
    const { nome, email, cargo, senha } = this.state;
    if (!nome || !email || !senha || !cargo) {
      alert("Deu ruim");
    } else {
      alert("Ta dando certo");
      console.log(this.state);
      api.post("user/api/v1/user", this.state, {
        header: {
            "Access-Control-Allow-Origin": "*",
        }
    });
    }
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
                  onChange={(e) => this.setState({ cargo: e.target.value })}
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
  }
}

export default Cadastro;
