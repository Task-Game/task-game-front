import React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import "../css/mainPage/button.css";
import Jony from '../imagens/jony.jpg';
import Naty from '../imagens/naty.jpeg';
import Pedro from '../imagens/pedro.jpeg';
import {Link } from 'react-router-dom';






const ModalModalExample = () => (
  <Modal trigger={<Button > Membros</Button>}>
    <Modal.Content size='small'>
    <div className='membros_perfil'>
      <img className="img_membro"src={Jony}></img>
      </div>
      
        <p className='nome_membro1'><Link to='/userperfil'>João Pedro </Link>
        </p>

        <hr className='linha'/>
        <div className='membros_perfil'>
      <img className="img_membro"src={Naty}></img>
      </div>
      
        <p className='nome_membro1'><a href='http://localhost:3000/visibleProfile.jsx'>Nathalia </a>
        </p>

        <hr className='linha'/>
        <div className='membros_perfil'>
      <img className="img_membro"src={Pedro}></img>
      </div>
      
        <p className='nome_membro1'><a href='http://localhost:3000/visibleProfile.jsx'> Pedro </a>
        </p>

        <hr className='linha'/>
        
       
</Modal.Content>
  </Modal>
)

export default ModalModalExample;