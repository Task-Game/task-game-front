import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import GuildImage from "../imagens/guildman.jpg";

export default class shopModal extends Component {
  constructor() {
    super();
    this.state = {
      id: {
        id: "",
      },
    };
  }

  handleSignUp = (e) => {
    //mesmo esquema do createGroup, a parte de cima também
    e.preventDefault();
    const { id } = this.state;
    if (!id) {
      alert(
        "Parece que não tem nenhum grupo com esse codigo, se quiser tente de novo"
      );
      console.log(this.state);
      //post
    } else {
      alert("Ta dando certo");
      console.log(this.state);
    }
  };

  render() {
    return (
      <Modal
        trigger={
          <Button inverted circular>
            Procurar
          </Button>
        }
      >
        <Modal.Header>Encontrar grupos</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={GuildImage} />
          <Modal.Description>
            <Header>Então esta a procura de amigos?</Header>

            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Qual o codigo no grupo?</label>
                <input
                  type="text"
                  placeholder="TaskGame"
                  onChange={(e) => this.setState({ id: e.target.value })}
                />
              </Form.Field>

              <Button color="teal" fluid type="submit">
                Procurar!
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
