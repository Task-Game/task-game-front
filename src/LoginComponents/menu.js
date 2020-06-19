import React, { Component } from "react";
import { Menu, Image, Button } from 'semantic-ui-react';
import '../css/mainPage/menu.css';
import Login from './login';
import Cadastro from './cadastro';




export default class MenuExampleBasic extends Component {
    state = {}

    render() {

        return (
            <Menu inverted color='violet' size="large" id="menu">
                <div id = 'menu-items'>



                <Menu.Item>
                    <Cadastro />
                 </Menu.Item>

                <Menu.Item>
                 <Button>a</Button>
                 </Menu.Item>          

                <Menu.Item>
                    <Login />
                </Menu.Item>


                <div id="shield">
                {/* isso não é um menu-item, e foi construido na base da gambiarra*/}           
                <Image src= "https://img.icons8.com/dusk/100/000000/shield.png"  />                
                </div>
                </div>

  
            </Menu>
        )
    }
}