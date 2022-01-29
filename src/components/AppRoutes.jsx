import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Servers from "../pages/Servers";
import AuthContext from "../context/authorization";
const AppRoutes = () => {
  const { authState } = useContext(AuthContext);
  return (authState) ? (
    <Switch>
      <Route path="/servers" component={Servers} />
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>) : (<Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  );
};
export default AppRoutes;
