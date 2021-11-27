import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Devices from "../pages/Devices";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import Servers from "../pages/Servers";
import AuthContext from "../context";
const AppRoutes = () => {
  const {isAuth} = useContext(AuthContext);
  {
    return isAuth ? (
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/devices" component={Devices} />
        <Route path="/posts" component={Posts} />
        <Route path="/servers" component={Servers} />
        <Redirect to="/users"/>
      </Switch>
    ) : (
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login"/>
      </Switch>
    );
  }
};
export default AppRoutes;
