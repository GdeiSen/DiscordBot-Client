import SideNavBar from "../components/NavBar";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import LoadingScreen from "../components/LoadingScreen";
import TopNavBar from "../components/TopNavBar";
const Layout = () => {
  const store = useSelector((state) => state);
  if (store?.user?.isLoading == true) return loading();
  else if (store?.user.isAuth == true) return mainLayout();
  else if (store?.user.isAuth == false) return 11
};

function mainLayout() {
  return (
    <>
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

function login() {
  return (
    <>
      <Login></Login>
    </>
  );
}
export { Layout };
