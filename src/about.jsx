import React, { Component } from 'react';
import Menu from './MainPageComponents/menu';
import Somos from './imagens/somos.jpg';
import Rapha from './imagens/rapha.jpeg';
import "./css/mainPage/about.css";
import Naty from './imagens/naty.jpeg';
import Pedro from './imagens/pedro.jpeg';
import Jony from './imagens/jony.jpg';
import Julia from './imagens/julia.jpeg';

export default class About extends Component {
  render() {
    return(
        <>        
        <Menu />
        <h1 class='titulo'>Quem somos</h1>

<table>
<tr>
  <td><img  width="900" height="450" src={Somos}/></td>
  
  <td> O TaskGame</td> 
</tr>

</table>
<hr class='linha'/>

<div>
  <img class="imagem_rapha" src={Rapha}></img>
</div>
<div class="info_rapha">
  <h2 class='foto_rapha'>Raphael Branco</h2>
  <h5 class='cargo_rapha'>Front-end</h5>
  </div>

<div>
  <img class="imagem_naty" src={Naty}></img>
</div>
<div class='info_naty'>
  <h2 class='foto_naty'>Nathalia Silva</h2>
  <h5 class='cargo_naty'>Back-end e banco de dados</h5>
  </div>
  
<div>
  <img class="imagem_pedro" src={Pedro}></img>

</div>
<div class='info_pedro'>
  <h2 class='foto_pedro'>Pedro Meneses</h2>
  <h5 class='cargo_pedro'>Front-end</h5>
  </div>
<div>
  <img class="imagem_joao" src={Jony}></img>
<div class='info_joao'>
  <h2 class='foto_joao'>João Pedro Watson</h2>
  <h5 class='cargo_joao'>Back-end e banco de dados</h5>
  </div>
</div>
<div>
  <img class="imagem_ju" src={Julia}></img>
<div class='info_ju'>
  <h2 class='foto_ju'>Julia Leoniani</h2>
  <h5 class='cargo_ju'>Front-end</h5>
  </div>
</div>
  

      </>
    );
  }
}