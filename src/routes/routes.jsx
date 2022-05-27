import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import React from "react";
import Home from "../pages/Home";
import Servers from "../pages/Servers";
import Server from "../pages/Server";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
const AppRoutes = () => {
  const store = useSelector((state) => state);
  return (
    <>
      {store?.user?.isAuth == true && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="servers/:serverId" element={<Server />} />
            <Route path="servers" element={<Servers />} />
            <Route path="*" element={<Navigate to="home"></Navigate>} />
          </Route>
        </Routes>
      )}
      {store?.user?.isAuth == false && (
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login"></Navigate>} />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;
