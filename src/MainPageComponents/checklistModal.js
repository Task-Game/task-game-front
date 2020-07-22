import React from "react";
import { Button, Image, Modal, List, Header, Input } from "semantic-ui-react";
import { FaPlus, FaTasks } from "react-icons/fa";
import Troll from "../imagens/guildman.jpg";

const CheckList = (props) => (
  <Modal
    trigger={
      <Button basic color="grey" style={{display: props.display}}>
        <FaPlus style={{ color: props.color }} />
      </Button>
    }
  >
    <Modal.Header>CheckList</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={Troll} />
      <Modal.Description>
        <Header>Uma tarefa com mais tarefas?</Header>

        <List divided verticalAlign="middle">

          <List.Item>
            <List.Content floated="right">
              <Button color="green">Add</Button >
          
         
        <Input /></List.Content>
          </List.Item>

        </List>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default CheckList;
