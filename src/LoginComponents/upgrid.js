import React from "react";
import { Grid, Image } from "semantic-ui-react";

import image1 from "../imagens/todo-image1.png";
import image2 from "../imagens/todo-image2.png";
import image3 from "../imagens/todo-image3.png";
import "../css/loginPage/grid.css";

const GridExampleColumnCount = () => (
  <div id="upgrid">
    <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Image src={image1} />
        </Grid.Column>

        <Grid.Column>
          <Image src={image2} />
        </Grid.Column>

        <Grid.Column>
          <Image src={image3} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default GridExampleColumnCount;
