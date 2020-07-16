import React from 'react';
import '../css/mainPage/card.css';
import TarefaModal from '../MainPageComponents/tarefaModal';
import { Button } from 'semantic-ui-react';
import Modal from '../MainPageComponents/button';

function GroupCard(props) {

    return (
        <>
        
<Modal class='botao_membro'/>

            <div className="all">

            <div className="card">
                <div className="card-imagegroup "></div>
                <div className="card-text">
                    <span className="date">{props.date}</span>
                         <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="card-stats" style={{backgroundColor:"#00CED1"}}>
                    <div className="stat">
                        <div className="valor">{props.members}</div>
                        <div className="type">Membros</div>
                    </div>
                    <div className="stat">
                        <div className="valor">Líder</div>
                        <div className="type">{props.name}</div>
                    </div>
                    <div className="stat">
                        <TarefaModal />
                    </div>
                </div>                
            </div>
            </div>
        </>

    )
}


export default GroupCard;