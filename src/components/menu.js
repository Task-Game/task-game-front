import React, { Component } from "react";
import { Menu, Image } from 'semantic-ui-react';
import '../css/menu.css';
import Login from './login';
import Cadastro from './cadastro';




export default class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted color='violet' >
                
                <Menu.Item>
                    <Cadastro />
                 </Menu.Item>

                <Menu.Item>
                <Image src= "https://img.icons8.com/dusk/48/000000/shield.png" />
                </Menu.Item>

                <Menu.Item>
                    <Login />
                </Menu.Item>
            </Menu>
        )
    }
}