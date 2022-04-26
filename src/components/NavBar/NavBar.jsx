import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.scss";
import { useSelector } from "react-redux";

const NavBar = (props) => {
  const globalMemory = useSelector(state => state);
  const logout = () => { }
  function tabClick(id) {
    let tabs = document.getElementsByClassName('click-effect');
    for (let index = 0; index < tabs.length; index++) {
      tabs[index].classList.remove('side-nav-tab-active');
    }
    let active_tab = document.getElementById(id)
    active_tab.classList.add('side-nav-tab-active')
  }
  return showNavbar();
  function showNavbar() {
    return (
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="side-nav-container">
            <div className="side-nav-column">
              <a href="/" className="side-nav-logo-container">
                <div className="fs-5 d-inline d-md-none">JBS</div>
                <span className="fs-5 d-none d-md-inline">John Bot Dash</span>
              </a>
              <hr />
              <div id="Home" className="side-nav-tab-container click-effect">
                <i className="fs-4 bi-house"></i><Link to="/home" className="text-decoration-none text-white" onClick={() => tabClick('Home')}><span className="ms-2 d-none d-md-inline">Home</span></Link>
              </div>
              <div id="DashBoard" className="side-nav-tab-container" data-bs-toggle="collapse" data-bs-target="#dashBoardSubMenu">
                <i className="fs-4 bi-speedometer2"></i> <span className="ms-2 d-none d-md-inline pointer">DashBoard</span>
              </div>
              <div id="dashBoardSubMenu" className="collapse">
                <div id="Servers" className="side-nav-undertab-container click-effect" onClick={() => tabClick('Servers')}><Link to="/servers" className="text-decoration-none text-white" >Server List</Link></div>
                <div id="Options" className="side-nav-undertab-container click-effect" onClick={() => tabClick('Options')}>Options</div>
              </div>

              <hr />
              <div className="side-nav-tab-container" href="#accountSubMneu" data-bs-toggle="collapse">
                <i className="fs-4 bi-person"></i> <span className="ms-2 d-none d-md-inline">Admin</span>
              </div>
              <div className="collapse" id="accountSubMneu">
                <div className="side-nav-undertab-container click-effect">Account</div>
                <div className="side-nav-undertab-container click-effect" onClick={() => logout()}>Log Out</div>
              </div>
            </div>
          </div>
          <div className="col py-3">
            {props.children}
          </div>
        </div>
      </div>)
  }
};
export default NavBar;
