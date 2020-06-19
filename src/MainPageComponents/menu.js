import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import '../css/mainPage/menuPrincipal.css';
import  { FaBars, FaUserAlt, FaStoreAlt, FaUsers, FaClipboard, FaAngleDoubleLeft, FaDiceD6, FaTimes } from 'react-icons/fa';
import '../css/mainPage/menu.css';
import { Link } from 'react-router-dom';

class menu extends Component {
  render(){

    return (
      <>

      <Menu   borderless inverted color='violet' size="tiny" >
                        
        
          <input type="checkbox" id="check" />
          <label htmlFor="check">
          <i id="cancel"><FaTimes /></i>
            <FaBars id="btn" />
            </label>

            <div className="sidebar">
        <header>Menu</header>
            <ul>
                <li><Link to="/TaskGame" style={{background:"#998AD3"}}><FaClipboard /> Tarefa</Link></li>
                <li><Link to="/Grupos" style={{background:"#E494D3"}}><FaUsers /> Grupos</Link></li>
                <li><Link to="/Loja" style={{background:"#CDF1AF"}}><FaStoreAlt /> Loja</Link></li>
                <li><Link to="/Perfil" style={{background:"#87DCC0"}}><FaUserAlt /> Perfil</Link></li>
                <li><Link to="/Sobre" style={{background:"#88BBE4"}}><FaDiceD6 />  Sobre</Link></li>
                <li><Link to="/" style={{background:"#C7CEEA"}}><FaAngleDoubleLeft /> Sair</Link></li>
                
            </ul>
        
       </div>
          
          <Menu.Header id="bemVindo">
            <div>
              <h1>Bem Vindo</h1>
            </div>
            <div>
              <h2>Usuario</h2>
            </div>

           </Menu.Header>

          <Menu.Item >

            <div id= "bemVindo">
              <h3 >Projetos: 1<br/> Tarefas: 1 </h3> {/* BR é uma gambiarra*/ }
            </div>
          </Menu.Item>
                
                <div id="shieldmenu">               
                {/* isso não é um menu-item, e foi construido na base da gambiarra*/}           
                <Image  src= "https://img.icons8.com/dusk/100/000000/shield.png"  />        
                </div>        
                
   
         </Menu>
         </>
    )
  }
  }

export default menu;
