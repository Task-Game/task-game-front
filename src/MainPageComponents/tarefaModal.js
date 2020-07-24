import React, { Component } from "react";
import { Button, Header, Image, Modal, Form } from "semantic-ui-react";
import tarefagirl from "../imagens/criartarefa.jpg";
import User from "../routes/auth";
import api from '../routes/api';

export default class shopModal extends Component {
  //importação do contexto da aplicação, ou o token do usuario que pode ser requirido em todas as partes do app
  static contextType = User;

  constructor() {
    super();
    this.state = {
      novoItem: {
        "nome": "",
        "descricao": "",
        "Frequencia_idFrequencia": "",    
        "Raridade_idRaridade": "", 
        "prazo": "",
        "Grupo_idGrupo": "",
        "idUsuario": ""
      },
    };
  }

 

  handleSignUp = (e) => {
    ////mesmo esquema do createGroup, a parte de cima também
    e.preventDefault();
    const { nome, descricao, Raridade_idRaridade, prazo, Frequencia_idFrequencia ,Grupo_idGrupo } = this.state;
    if (!nome || !descricao || !Raridade_idRaridade || !prazo || !Frequencia_idFrequencia || !Grupo_idGrupo) {
      alert("Deu ruim");
      console.log(this.state);
    } else {
      this.state.idUsuario = this.context.token;
      alert("Tarefa criada! verique-a ela na aba 'Tarefas' ");

      api.post('task/api/v1/', this.state, {
        header: {
            "Access-Control-Allow-Origin": "*",
        }
      })
      console.log(this.state);    
    }
  };

  render() {
    return (
      <Modal
        trigger={
          <Button color="blue" circular>
            Nova Tarefa!
          </Button>
        }
      >
        <Modal.Header>Criar Tarefas</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={tarefagirl} />
          <Modal.Description>
            <Header>Uma tarefa? Espero que não pegue tão leve</Header>

            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Titulo</label>
                <input
                  type="text"
                  placeholder="Envelopes"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Descrição</label>
                <input
                  type="text"
                  placeholder="Entregar os envelopes na diretoria"
                  onChange={(e) => this.setState({ descricao: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <label>Quantas vezes ira fazer?</label>
                <select onChange={(e) => this.setState({ Frequencia_idFrequencia: e.target.value })}>
                <option value ="">Selecione a frequência!</option>
                  <option value ="1">Diario</option>
                  <option value ="2">Semanal</option>
                  <option value ="3">Quinzenal</option>
                  <option value ="4">Mensal</option>
                  <option value ="5">Uma vez</option>
                  
                </select>
              </Form.Field>

              <Form.Field>
                <label>E sua raridade</label>
                <select onChange={(e) => this.setState({ Raridade_idRaridade: e.target.value })}>
                <option value ="">Selecione a raridade!</option>
                  <option value ="1">Comum</option>
                  <option value ="2">Incomum</option>
                  <option value ="3">Raro</option>
                  <option value ="4">Épico</option>
                  <option value ="5">Lendario!!</option>
                  
                </select>
              </Form.Field>

              <Form.Field>
                <label>Até quando pode ser feito?</label>
                <input
                  type="date"
                  placeholder="00/00/0000"
                  onChange={(e) => this.setState({ prazo: e.target.value })}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirme o código do grupo</label>
                <input
                  type="number"
                  placeholder="1"
                  onChange={(e) => this.setState({ Grupo_idGrupo: e.target.value })}
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
