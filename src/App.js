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
    <div class="ui message violet" id="container">
  <div class="header">  Mais sobre o TaskGame</div>
  <p>
    Coisas legais sobre o TaskGame
  </p>
</div>
    <Footer />
    </>

  );
}

export default App;
