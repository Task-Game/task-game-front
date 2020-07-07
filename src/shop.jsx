import React, { Component } from 'react';
import Menu from './MainPageComponents/menu';
import Card from './MainPageComponents/card';
import ShopModal from './MainPageComponents/shopModal';

export default class TaskGame extends Component {

  render() {
    return(
        <>        
        <Menu />
        <ShopModal />
        <Card 
        date="NOVIDADE!" 
        title="Lista de tarefas" 
        description="Uma simples lista de tarefa" 
        name="João" 
        price="5" 
        rarity="comum"/>
        </>
    );
  }
}