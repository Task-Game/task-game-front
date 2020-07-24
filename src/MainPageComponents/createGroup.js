import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import GuildImage from "../imagens/guildman.jpg";
import api from '../routes/api';
import User from "../routes/auth";

export default class shopModal extends Component {
  static contextType = User;

  //construção do estado
  constructor() {
    super();
    this.state = {
      novoGrupo: {
        nome: "",
        descricao: "",
        dataEncerramento:"",
        idUsuario: this.context
      },
    };
  }

  //pega o estado da aplicação e manda para a api
  handleSignUp = (e) => {
    e.preventDefault();
    const { nome, descricao,  dataEncerramento, idUsuario} = this.state;    
    console.log(this.context.token)
    if (!nome || !descricao || !dataEncerramento || !idUsuario) {
      alert("Deu ruim");
      console.log(this.state);
    } else {
      alert("Grupo criado com sucesso!");
      console.log(this.state);
      api.post("group/api/v1/group", this.state,{idUsuario : this.context.token},  {
        header: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        }
    });
    }
  };

  render() {
    return (
      <Modal
        trigger={
          <Button inverted circular>
            Novo grupo
          </Button>
        }
      >
        <Modal.Header>Hm, você é novo por aqui</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={GuildImage} />
          <Modal.Description>
            <Header>Qual é o nome do grupo, projeto ou empresa?</Header>

            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Qual o nome do grupo</label>
                <input
                  type="text"
                  placeholder="TaskGame"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="The best group in the world!!"
                  onChange={(e) => this.setState({ descricao: e.target.value })}
                />
              </Form.Field>
              <Form.Field>
                <label>Quando esse projeto ira acabar?</label>
                <input
                  type="date"
                  onChange={(e) => this.setState({ dataEncerramento: e.target.value })}
                />
              </Form.Field>
              <Form.Field>
                <label>Tem certeza disso?</label>
                <input
                  type="checkbox"
                  onChange={(e) => this.setState({ idUsuario: this.context.token })}
                />
              </Form.Field>

              <Button color="teal" fluid type="submit">
                Criar!
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
