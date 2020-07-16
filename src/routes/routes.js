import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainPage from "../mainPage";
import TaskGame from "../taskGamePage";
import About from "../about";
import Shop from "../shop";
import Profile from "../profile";
import Groups from "../grupos";
import StoreProvider from "../routes/provider";
import Confirm from "../LoginComponents/confirm";

<<<<<<< HEAD
import User  from './auth'; 

=======
import User from "./auth";
>>>>>>> c10fe067f484e7d65d193a1059aaafc400e08939

/*Login route verifica se as credencias estão certas ou não, e 
passa as props para o usuario caso tudo esteja ok */

const LoginRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(User);

  return (
    <Route
      {...rest}
      render={() =>
        token ? (
          <Component {...rest} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: token.location } }} />
        )
      }
    />
  );
};

//As rotas do site
const routes = () => (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/confirmar" component={Confirm}></Route>
        <LoginRoute exact path="/grupos" component={Groups}></LoginRoute>
        <LoginRoute exact path="/loja" component={Shop}></LoginRoute>
        <LoginRoute exact path="/perfil" component={Profile}></LoginRoute>
        <LoginRoute exact path="/sobre" component={About}></LoginRoute>
        <LoginRoute path="/tarefas" component={TaskGame} />
        <Route
          path="*"
          component={() => <h1>Algo deu errado, tente novamente</h1>}
        />
      </Switch>
    </StoreProvider>
  </BrowserRouter>
);

export default routes;
