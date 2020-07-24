import React, {Component,useContext,useEffect,useState} from 'react';
import './css/mainPage/visibleProfile.css';
import User from './routes/auth';
import Menu from './MainPageComponents/menu';
import Perfil from './imagens/perfil.jpg';
import Capa_comp from './imagens/capa_comp.jpg';
import api from './routes/api';

const VisibleProfile = () => {
    const [stats, setStats] = useState([]);
    const UserId = useContext(User);
  
      useEffect(() => {
      api.get(`api/v1/user/${UserId.token}`).then((response) => {
        const use = response.data;
        setStats(use);
        console.log(use);
       
      });
    }, []);

        return(
            <>
            <Menu/>
	
	<div class="perfil-capa-foto-vs">
	   <div class="cards_capa">
        <div class="capa_vs">
          <div class="imagem_capa_vs">
            <img class ="image_capa_vs" src={Capa_comp}  />
          </div>
       <section class="card_vs">
       	<div class="imagem_perfil_vs">
            <img class ="imagem_perfil_vs" src={Perfil}  />
        </div>
        </section>
</div>
</div>

<div class="informacoes_vs">
        <h4 class="nome_vs">{stats.nome}</h4>
<h5 class="cargo_vs">{stats.cargo}</h5>
</div>

<div class="projetos">
  <h2> Projetos</h2>  
  <div class="card_projetos">
        <div class="card_projetos">
          <h4 class="nome_projetos">Folga</h4>
          <p class="descricao_projetos">Folga de um dia entre o mês de abril e maio</p>
          <p class="data_projetos">Resgatada no dia 28 de maio</p>
          </div>

</div>
</div>
</div>
            
            
            </>
        );
    }
export default VisibleProfile;