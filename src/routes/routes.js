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
            <Component  />
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
            <LoginRoute exact path="/grupos" component={Groups}></LoginRoute>
            <LoginRoute exact path="/loja" component={Shop} ></LoginRoute>
            <LoginRoute exact path="/perfil" component={Profile} ></LoginRoute>
            <LoginRoute exact path="/sobre" component={About} ></LoginRoute>
            <LoginRoute path="/tarefas" component={TaskGame} />
            <Route path="*" component={() => <h1>Algo deu errado, tente novamente</h1>} />
        </Switch>
    </BrowserRouter>
)

export default routes;