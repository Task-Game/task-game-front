import React from 'react';
import  { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../mainPage';
import TaskGame from '../taskGamePage';

import { User } from '../auth'

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

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} ></Route>
            <LoginRoute path="/TaskGame" component={TaskGame} />
        </Switch>
    </BrowserRouter>
)

export default routes;