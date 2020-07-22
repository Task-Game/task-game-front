import React, { Component,useEffect, useState, useContext } from 'react';
import Menu from './MainPageComponents/menu';
import './css/mainPage/profile.css';
import Capa_comp from'./imagens/capa_comp.jpg';
import Perfil from './imagens/perfil.jpg';
import { Link } from "react-router-dom";
import api from './routes/api';
import User from "./routes/auth";
import axios from 'axios';



export default class TaskGame extends Component {
  render() {
    return(
      <>
        <div>        </div>
        <Menu />
      <div class="perfil">

   <div class="cars_capa">
        <div class="capa">
          <div class="imagem_capa">
            <img class ="image_capa" src={Capa_comp}  />
          </div>
          </div>

        <div class="trocar_foto_capa">
        <input type="file" multiple accept="image/*"  onchange="handleFiles(this.files)"/>
        </div>
  </div>      


<div class="cards">
          <div class="imagem_perfil">
            <img class ="image_perfil" src={Perfil}  />
          </div>
         </div>
  			<div class="trocar_foto_perfil">
        <input type="file" multiple accept="image/*"  onchange="handleFiles(this.files)"/>

    		  </div>



    <form class="informacoes_perfil">	

    	<div class="dados_perfil" >
         	<label>Nome</label>
        <input type="text" class="nome_usuario"
         placeholder={User.nome}
         onChange={(e) => this.setState({ nome: e.target.value })}
        />
        
      	</div>
    	<div class="dados_perfil">
      <label>Email</label>  
      <input type="text" name="email_usuario"
       placeholder={User.email}
       onChange={(e) => this.setState({ email: e.target.value })}/>
    	</div>
    
    	<div class="dados_perfil2">
    		<label>Senha</label>
    		<input type="text" name="senha_usuario"
         placeholder={User.senha}
         onChange={(e) => this.setState({ senha: e.target.value })}
        />
    	</div>
    	<div class="dados_perfil3">
    		<label>Cargo</label>
    		<input type="text" name="cargo_usuario"
         placeholder={User.cargo}
         onChange={(e) => this.setState({ cargo: e.target.value })}/>
    	</div>

    </form>


<div class='botoes'>
  <button class="cancelar_alteracoes">Cancelar</button>
  <button class="salvar_alteracoes">Salvar</button>
</div>


<div class="recompensas">
  <h2>Recompensas resgatadas</h2>  
  <div class="card_recompensa">
        <div class="card_recompensa">
    <h4 class="nome_recompensa">Recompensas</h4>
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
