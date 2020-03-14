import React from 'react';
import  { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../mainPage';
import TaskGame from '../taskGamePage';

import { User } from './api'

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
            <LoginRoute path="/TaskGame" component={TaskGame} />
            <Route path="*" component={() => <h1>Tem parada errada ai irmão</h1>} />
        </Switch>
    </BrowserRouter>
)

export default routes;