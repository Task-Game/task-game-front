import React from 'react';
import './App.css';
import logo from  './imagens/índice.jpeg';

function App() {
  return (
    <>
    <div class="ui menu purple inverted fixed curvatura">
    <a class="item">Cadastre-se</a>
    <a class="item">Login</a>
    <a class="item">Upcoming Events</a>
  </div>


<div class="ui internally celled grid">
  <div class="row">
    <div class="three wide column"><img src={logo}/></div>
    <div class="ten wide column">
      <div id = "Titulo">
    <h1>Bem vindo ao TaskGame!</h1>
    <p>O task task é um aplicativo de todo para organizar os seus afazeres e deixar a sua vida na empresa mais divertida!

    </p>
    </div>
    </div>
    <div class="three wide column"><img src={logo} /></div>
  </div>

</div>

  </>

  );
}

export default App;
