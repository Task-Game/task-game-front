import React, { Component } from 'react';
import Card from './MainPageComponents/card'
import Menu from './MainPageComponents/menu';

export default class TaskGame extends Component {
  render() {
    return(
        <>        
        <Menu />
        <Card 
        date="31/07" 
        title="Tarefa" 
        description="Uma simples tarefa de fazer um card" 
        name="Pedro" 
        price="9" 
        rarity="incomum"/>
        </>
    );
  }
}
