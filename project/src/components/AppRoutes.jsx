import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Devices from "../pages/Devices";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
      <Route path="/posts" component={Posts} />
    </Switch>
  );
};
export default AppRoutes;
