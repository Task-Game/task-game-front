import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import GuildImage from "../imagens/guildman.jpg";
import api from '../routes/api';

export default class shopModal extends Component {
  //construção do estado
  constructor() {
    super();
    this.state = {
      novoGrupo: {
        nome: "",
        descricao: "",
      },
    };
  }

  //pega o estado da aplicação e manda para a api
  handleSignUp = (e) => {
    e.preventDefault();
    const { nome, descricao } = this.state;
    if (!nome || !descricao) {
      alert("Deu ruim");
      console.log(this.state);
    } else {
      alert("Ta dando certo");
      console.log(this.state);
      api.post("group/api/v1/group", this.state, {
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
                <label>Qual o nome do item</label>
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
