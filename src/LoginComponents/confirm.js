import React, { useState, useEffect, FormEvent } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Menu from '../LoginComponents/menu';
import '../css/mainPage/menuPrincipal.css';



const Confirm = () => {
    
const [codes, setCodes] = useState({code: ""});

function onSubmit(event){

    event.preventDefault();
    const code = codes;
    //envia o codigo para algum lugar após ele digitar(é aqui que o post fica)
   return console.log(code)
}

    
function onChange(event){
    //pega o codigo que o usuario digita
        const { value } = event.target;
        setCodes({code: value });
        console.log(codes)
      }


    return ( 
        <>
        <Menu />
        
        <form onSubmit={onSubmit}>
        <div className="no-group">
            <p>Digite o codigo de confirmação aqui em baixo</p>
            <input 
            type="text" 
            placeholder="Digite o codigo aqui" 
            name="code" 
            onChange={onChange} 
                 >
                </input>   
                <br/>
                <Button>Confirmar!</Button>

        </div>
        </form>

    
        </>   
     );
 
}
 
export default Confirm;
