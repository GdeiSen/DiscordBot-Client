import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthService from "../services/authService";

const NavBar = (props) => {
  const store = useSelector((state) => state);
  const authService = new AuthService();
  return (
    <div className="top-nav-container">
      <div className="top-row">
        <div className="logo">
          <img src={require("../images/logo512.png")} />
          <div className="title">
            <h4>Baverio</h4>
          </div>
        </div>

        <div id="Home" className="top-nav-tab-container">
          <NavLink to="/home" className="text">
            <i className="fs-3 bi-house"></i>
            <span>Home</span>
          </NavLink>
        </div>
        <div
          id="DashBoard"
          className="top-nav-tab-container"
          data-bs-toggle="collapse"
          data-bs-target="#dashBoardSubMenu"
        >
          <div className="text">
            <i className="fs-3 bi-speedometer2"></i>
            <span>DashBoard</span>
          </div>
        </div>
        <div
          className="top-nav-tab-container"
          href="#accountSubMneu"
          data-bs-toggle="collapse"
        >
          <div className="text">
            <i className="fs-3 bi-person"></i>
            <span>{store?.user?.nikName}</span>
          </div>
        </div>
      </div>
      <div className="top-row">

        <div id="dashBoardSubMenu" className="collapse">
          <div className="collapse-row">
            <div id="Servers" className="top-nav-undertab-container click-effect dropdown-text" > <NavLink to="/servers" className="text-decoration-none dropdown-text" > Server List </NavLink> </div>
            <div id="Options" className="top-nav-undertab-container click-effect dropdown-text" > Options </div>
          </div>
        </div>

        <div id="accountSubMneu" className="collapse">
          <div className="collapse-row">
            <div  id="Servers" className="top-nav-undertab-container click-effect dropdown-text"> Account </div>
            <div id="Options" className="top-nav-undertab-container click-effect dropdown-text" onClick={() => { authService.logout(); }}> Log Out</div>
          </div>
        </div>
      </div>

      
    </div>
  );
};
export default NavBar;
