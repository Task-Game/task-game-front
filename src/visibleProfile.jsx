import React from 'react';
import Menu from './MainPageComponents/menu ';
import './css/mainPage/visibleProfile.css';
import User from './routes/auth';

export default class VisebleProfile extends Component{
    render(){
        return(
            <>
            <Menu/>
            
	
	<div class="perfil-capa-foto">
	   <div class="cars_capa">
        <div class="capa">
          <div class="imagem_capa">
            <img class ="image_capa" src="imagens/capa_comp.jpg"  />
          </div>
       <section class="card">
       	<div class="imagem_perfil">
            <img class ="imagem_perfil" src="imagens/perfil.jpg"  />
        </div>
        </section>
</div>
</div>

<div class="informacoes">
        <h4 class="nome">{User.nome}</h4>
<h5 class="cargo">{User.cargo}</h5>
</div>

</div>
            
            
            </>
        );
    }
} 