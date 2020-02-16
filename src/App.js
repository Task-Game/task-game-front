import React from 'react';

import Menu from './components/menu';
import Grid from './components/grid';
import UpGrid from './components/upgrid';
import Footer from './components/footer';

import './css/mainPage.css';

function App() {
  return (
    <>
    <Menu />
    <Grid />
    <UpGrid />
    <Footer />
    </>

  );
}

export default App;
