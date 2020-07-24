import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import SalesmanImage from "../imagens/salesman.jpg";
import { FaCoins } from "react-icons/fa";
import api from '../routes/api'

export default class shopModal extends Component {
  constructor() {
    super();
    this.state = {
      novoItem: {
        nome: "",
        descricao: "",
        valor: "",
        Loja_idLoja:""
      },
    };
  }

  //mesmo esquema do createGroup, a parte de cima também
  handleSignUp = (e) => {
    e.preventDefault();
    const { nome, descricao, valor, Loja_idLoja } = this.state;
    if (!nome || !descricao || !valor || !Loja_idLoja) {
      alert("Deu ruim");
      console.log(this.state);
    } else {
      alert("Item criada! verique-a ela na aba 'Loja' ");
      console.log(this.state);
      api.post("/item/api/v1/item", this.state)
    }
  };

  render() {
    return (
      <Modal
        trigger={
          <Button basic color="grey">
            {" "}
            <FaCoins style={{ color: "#e6e600" }} />{" "}
          </Button>
        }
      >
        <Modal.Header>Vem sempre aqui?</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={SalesmanImage} />
          <Modal.Description>
            <Header>Coloque um item a venda!</Header>

            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Qual o nome do item</label>
                <input
                  type="text"
                  placeholder="Caderninho"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="É bonito"
                  onChange={(e) => this.setState({ descricao: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Quanto ele vale</label>
                <input
                  type="text"
                  placeholder="200"
                  onChange={(e) => this.setState({ valor: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Qual o código do grupo?</label>
                <input
                  type="number"
                  placeholder="1"
                  onChange={(e) => this.setState({ Loja_idLoja: e.target.value })}
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
