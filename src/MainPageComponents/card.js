import React from "react";
import "../css/mainPage/card.css";
import { Button} from "semantic-ui-react";

const Card = (props) => {
  //função chamada ao concluir a tarefa
  function concluirTarefa() {
    //post perfilprice = perfilprice +  price
    //delete tarefa
    alert("Meus parabens! foi adicionado " + props.price + "g a sua conta");
  }
  function comprarItem() {
    //post perfilprice = perfilprice -  price
    //delete tarefa
    alert(`Meus parabens! foi adicionado "` + props.title + `" a sua conta`);
  }

  function cardType(cardType) {
    if (cardType == "tarefa") return concluirTarefa();
    else if (cardType == "shop") return comprarItem();
  }

  function cardImage(backgroundImages) {
    return {
      gridArea: "image",
      backgroundImage: "url(" + backgroundImages + ")",
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundSize: "cover",
    };
  }

  return (
    <>
      <div className="card">
        <div className="card-image" style={cardImage(props.image)}></div>
        <div className="card-text">
          <span className="date">{props.date}</span>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>

        <div className="card-stats" style={{ background: props.color }}>
          <div className="stat">
            <div className="valor">{props.price}g</div>
            <div className="type">{props.rarity}</div>
          </div>
          <div className="stat">
            <div className="valor">Por</div>
            <div className="type">{props.name}</div>
          </div>
          <div className="stat">
            <Button color='gray'  onClick={() => cardType(props.cardType)}>
              
             
            
              {props.buttomName}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
