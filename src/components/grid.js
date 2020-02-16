import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import cansado from '../imagens/cansado-grid.png';
import heroi from '../imagens/heroi-grid.png'
import '../css/grid.css'



const GridExampleCelledInternally = () => (
  <div id ="grid">
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width={5}>
        <Image src={cansado} />
      </Grid.Column>
      <Grid.Column width={6}>
        <div id="texto">
        <h1>Bem vindo ao TaskGame</h1>
        <p>{texto}</p>
        </div>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={heroi} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  </div>
)

export default GridExampleCelledInternally

const texto = "Atualmente as empresas têm investido cada vez mais em inovações e tecnologias. Prezando pelo aumento da produtividade, as empresas notaram que quando seus empregados estão em um ambiente descontraído para trabalhar há um aumento da produtividade, e os projetos são realizados com uma velocidade eenvolvimento maior. Com isso em mente, queremos desenvolver maior engajamento da equipe a partir de uma aplicação que disponibilize a agenda de projetos, suas metas e objetivos de uma maneira simples e gamificada. Assim o chefe ou líder de equipe poderá disponibilizar as tarefas de maneira rápida, eficiente, e divertida, colocando aspectos de um jogo (pontuação, nível, habilidades e etc) dentro dele, tornando o ambiente de trabalho mais divertido e, até mais competitivo."
