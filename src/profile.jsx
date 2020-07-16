import React, { Component } from 'react';
import Menu from './MainPageComponents/menu';
import './css/mainPage/profile.css';
import Capa_comp from'./imagens/capa_comp.jpg';
import Perfil from './imagens/perfil.jpg';
import Modal from './MainPageComponents/trocarFotoCapa';


export default class TaskGame extends Component {
  render() {
    return(
        <>        
        <Menu />
      <div class="perfil">

   <div class="cars_capa">
        <div class="capa">
          <div class="imagem_capa">
            <img class ="image_capa" src={Capa_comp}  />
          </div>
          </div>

        <div class="trocar_foto_capa">
        <Modal/>
        </div>
  </div>      


<div class="cards">
          <div class="imagem_perfil">
            <img class ="image_perfil" src={Perfil}  />
          </div>
         </div>
        <form>
  			<div class="trocar_foto_perfil">
    		<input type="file" name=""/>

    		  </div>
              </form>



    <form class="informacoes_perfil">	

    	<div class="dados_perfil">
    		<label>Nome</label>
    		<input type="text" class="nome_usuario"/>
      	</div>
    	<div class="dados_perfil">
      <label>Email</label>  
      <input type="email" name="email_usuario"/>
    	</div>
    
    	<div class="dados_perfil">
    		<label>Senha</label>
    		<input type="password" name="senha_usuario"/>
    	</div>
    	<div class="dados_perfil">
    		<label>Cargo</label>
    		<input type="text" name="cargo_usuario"/>
    	</div>

    </form>



  <table class="tabela_equipe" border="1">
  	<tr><td>Equipes que já participei</td> </tr>
  	<tr><td>devtube</td></tr>
  	<tr><td>asdasdasda</td></tr>
  	<tr><td>wsdhaiodosçd</td></tr>
  </table>
<div class="botoes">
  <button class="cancelar_alteracoes">Cancelar</button>
  <button class="salvar_alteracoes">Salvar</button>
</div>


<div class="recompensas">
  <h2>Recompensas resgatadas</h2>  
  <div class="card_recompensa">
        <div class="card_recompensa">
          <h4 class="nome_recompensa">Folga</h4>
          <p class="descricao_recompensa">Folga de um dia entre o mês de abril e maio</p>
          <p class="data_recompensa">Resgatada no dia 28 de maio</p>
          </div>
          
         

        
</div>


</div>
</div>





</>
    );
  }
}
