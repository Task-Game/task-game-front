import React, { Component } from 'react';

import Menu from './LoginComponents/menu';
import Grid from './LoginComponents/grid';
import UpGrid from './LoginComponents/upgrid';
import About from './LoginComponents/About';
import Footer from './LoginComponents/footer';

import './css/mainPage.css';

class MainPage extends Component {
  render(){
  return (
    <>
    <Menu />
    <Grid />
    <UpGrid />
    <About />
    <Footer />
    </>
  )
  };
}

export default MainPage;