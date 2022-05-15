import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="side-nav-container">
      <div className="column">
        <div className="logo">
          <img src={require("../images/logo512.png")}/>
          <div className="title"><h4>Baverio</h4></div>
          <div className="title">v2.0.8</div>
        </div>
        <hr />


        <div id="Home" className="side-nav-tab-container">
        <NavLink to="/home" className="text"><i className="fs-3 bi-house"></i><span>Home</span></NavLink>
        </div>
        <div id="DashBoard" className="side-nav-tab-container" data-bs-toggle="collapse" data-bs-target="#dashBoardSubMenu">
        <div className="text"><i className="fs-3 bi-speedometer2"></i><span>DashBoard</span></div>
        </div>
        <div id="dashBoardSubMenu" className="collapse">
          <div id="Servers" className="side-nav-undertab-container"><NavLink to="/servers" className="text-decoration-none dropdown-text" >Server List</NavLink></div>
          <div id="Options" className="side-nav-undertab-container click-effect dropdown-text">Options</div>
        </div>

        <hr />
        <div className="side-nav-tab-container" href="#accountSubMneu" data-bs-toggle="collapse">
          <div className="text"><i className="fs-3 bi-person"></i><span>Admin</span></div>
        </div>
        <div className="collapse" id="accountSubMneu">
          <div className="side-nav-undertab-container click-effect dropdown-text">Account</div>
          <div className="side-nav-undertab-container click-effect dropdown-text">Log Out</div>
        </div>

      </div>
    </div>
  )
};
export default NavBar;
