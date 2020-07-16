import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import "../css/mainPage/trocarCapa.css";
import Capa_comp from '../imagens/capa_comp.jpg';
import Capa_eisten from '../imagens/capa_eisten.png';
import Capa_londres from '../imagens/capa_londres.jpg';
import Capa_tokyo from '../imagens/capa_tokyo.jpg';
import Capa_lua from '../imagens/capa_lua.jpg';
import Capa_pacman from '../imagens/capa_pacman.png';
import Capa_mao from '../imagens/capa_mao.jpg';
import Capa_game from '../imagens/capa_game.jpg';



const ModalModalExample = () => (
  <Modal trigger={<Button class='' > Trocar Capa</Button>}>
    <Modal.Content>
      <Modal.Header class='texto'>Escolha sua capa</Modal.Header>
      <div class='capas'>
      <div class='capa_comp'>
      <img class="capa_comp"src={Capa_comp}></img>
      </div>
       <div class='capa_lua'>
      <img class="capa_lua"src={Capa_lua}></img>
      </div>
       <div class='capa_londres'>
      <img class="capa_londres"src={Capa_londres}></img>
      </div>
       <div class='capa_game'>
      <img class="capa_game"src={Capa_game}></img>
      </div>
       <div class='capa_eisten'>
      <img class="capa_eisten"src={Capa_eisten}></img>
      </div>
       <div class='capa_mao'>
      <img class="capa_mao"src={Capa_mao}></img>
      </div>
      <div class='capa_pacman'>
      <img class="capa_pacman"src={Capa_pacman}></img>
      </div> 
      <div class='capa_tokyo'>
      <img class="capa_tokyo"src={Capa_tokyo}></img>
      </div>
      </div>
      
        
       
</Modal.Content>
  </Modal>
)

export default ModalModalExample;