import React, { Component } from 'react';
import Menu from './Components/menu';
import Card from './Components/card';
import Modal from './Components/novoCard';
import Input from'./Components/pesquisa';

import './css/menuPrincipal.css';



class App extends Component {
  render(){
  return (
    <>
    <Menu />
    <Input/>
    <Card/>
    <Modal/>
    </>
  )
  };
}

export default App
