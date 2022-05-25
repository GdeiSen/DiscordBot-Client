import SideNavBar from "./NavBar";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import LoadingScreen from "./LoadingScreen";
import TopNavBar from "./TopNavBar";
const Layout = () => {
  const store = useSelector((state) => state);
  if (store?.user?.isLoading == true) return loading();
  else if (store?.user?.isAuth === true) return mainLayout();
  else return loginLayout();
};

function mainLayout() {
  return (
    <div className="layout-container">
      <TopNavBar />
      <div className="layout-container-row h-100">
        <div className="side-nav-bar-column">
          <SideNavBar />
        </div>
        <div className="layout-content-column">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function loginLayout() {
  return (
    <>
      <div>
        <Login></Login>
      </div>
    </>
  );
}

function loading() {
  return (
    <>
      <LoadingScreen></LoadingScreen>
    </>
  );
}
export { Layout };
