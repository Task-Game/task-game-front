import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import "../css/mainPage/button.css";
import Jony from '../imagens/jony.jpg';
import Naty from '../imagens/naty.jpeg';
import Pedro from '../imagens/pedro.jpeg';

const ModalModalExample = () => (
  <Modal trigger={<Button class='' > Membros</Button>}>
    <Modal.Content size='small'>
    <div class='membros_perfil'>
      <img class="img_membro"src={Jony}></img>
      </div>
      
        <p class='nome_membro1'><a href='http://localhost:3000/visibleProfile.jsx'>João Pedro </a>
        </p>

        <hr class='linha'/>
        <div class='membros_perfil'>
      <img class="img_membro"src={Naty}></img>
      </div>
      
        <p class='nome_membro1'><a href='http://localhost:3000/visibleProfile.jsx'>Nathalia </a>
        </p>

        <hr class='linha'/>
        <div class='membros_perfil'>
      <img class="img_membro"src={Pedro}></img>
      </div>
      
        <p class='nome_membro1'><a href='http://localhost:3000/visibleProfile.jsx'> Pedro </a>
        </p>

        <hr class='linha'/>
        
       
</Modal.Content>
  </Modal>
)

export default ModalModalExample;