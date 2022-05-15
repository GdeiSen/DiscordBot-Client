import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="side-nav-container">
      <div class="row">

        <div class="logo">
          <h2>
            BaverIO
          </h2>
        </div>
        <hr />


        <div id="Home" className="side-nav-tab-container">
          <i className="fs-3 bi-house"></i><Link to="/home" className="text-decoration-none text">Home</Link>
        </div>
        <div id="DashBoard" className="side-nav-tab-container" data-bs-toggle="collapse" data-bs-target="#dashBoardSubMenu">
          <i className="fs-3 bi-speedometer2"></i> <span className="text-decoration-none text">DashBoard</span>
        </div>
        <div id="dashBoardSubMenu" className="collapse">
          <div id="Servers" className="side-nav-undertab-container"><Link to="/servers" className="text-decoration-none dropdown-text" >Server List</Link></div>
          <div id="Options" className="side-nav-undertab-container click-effect dropdown-text">Options</div>
        </div>

        <hr />
        <div className="side-nav-tab-container" href="#accountSubMneu" data-bs-toggle="collapse">
          <i className="fs-3 bi-person"></i> <span className="text">Admin</span>
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
