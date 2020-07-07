import React from 'react';
import  { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../mainPage';
import TaskGame from '../taskGamePage';
import About from '../about';
import Shop from '../shop';
import Profile from '../profile';
import Groups from '../grupos';

import User  from './auth'

/*Login route verifica se as credencias estão certas ou não, e 
passa as props para o usuario caso tudo esteja ok */

const LoginRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            User() ? (
            <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location} }} />
                ) 
            
            }
            />
);

//As rotas do site
const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} ></Route>
            <Route exact path="/Grupos" component={Groups}></Route>
            <Route exact path="/Loja" component={Shop} ></Route>
            <Route exact path="/Perfil" component={Profile} ></Route>
            <Route exact path="/Sobre" component={About} ></Route>
            <LoginRoute path="/TaskGame" component={TaskGame} />
            <Route path="*" component={() => <h1>Algo deu errado, tente novamente</h1>} />
        </Switch>
    </BrowserRouter>
)

export default routes;