import React, { Component } from 'react'
import { Menu,Button,Image } from 'semantic-ui-react'
import '../css/menuPrincipal.css'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu   borderless inverted color='violet' size="tiny" id="menuPrincipal">
          <Button  invert color='violet' id="menuLateral" bars>=</Button>
          <Menu.Header id="bemVindo">
            <div>
              <h1>Bem Vindo</h1>
            </div>
            <div>
              <h2>Nome user</h2>
            </div>

           </Menu.Header>
<Menu.Item >

           <div id= "tarefa">
             <h3 >Projetos: 4<br/> Tarefas: 15 </h3> {/* BR é uma gambiarra*/ }
           </div>
           </Menu.Item>
           <div id="shield">
                {/* isso não é um menu-item, e foi construido na base da gambiarra*/}           
                <Image  src= "https://img.icons8.com/dusk/100/000000/shield.png"  />                
                </div>
   
         </Menu>
    )
  }
}
