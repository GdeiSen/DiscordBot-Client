import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Servers from "../pages/Servers/Servers";
import Server from "../pages/Server/Server";
import { Layout } from "../components/Layout"
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="servers/:serverId" element={<Server />} />
          <Route path="servers" element={<Servers />} />
        </Route>
      </Routes>
    </>
  )
};
export default AppRoutes;
