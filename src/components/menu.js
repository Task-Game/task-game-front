import React, { Component } from "react";
import { Menu, Image } from 'semantic-ui-react';
import '../css/menu.css';
import Login from './login';
import Cadastro from './cadastro';




export default class MenuExampleBasic extends Component {
    state = {}

    render() {

        return (
            <Menu inverted color='violet' >
                <div id = 'menu-items'>
                <Menu.Item>
                    <Cadastro />
                 </Menu.Item>

                <Menu.Item>
                <Image src= "https://img.icons8.com/dusk/48/000000/shield.png" />
                </Menu.Item>

                <Menu.Item>
                    <Login />
                </Menu.Item>
                </div>
            </Menu>
        )
    }
}