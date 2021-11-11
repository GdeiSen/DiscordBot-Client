import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import AuthContext from "../../context";
const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
  }
  if (isAuth == true) {
    return (
      <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo margin-left">
            Gordey's Project
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down margin-right"
          >
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/devices">Devices</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <a
              class="waves-effect waves-light btn white black-text"
              onClick={() => {logout()}}
            >
              Log Out
            </a>
          </ul>
        </div>
      </nav>
    );
  } else
    return (
      <nav>
        <div className="nav-wrapper black">
          <a href="#" className="brand-logo margin-left">
            Gordey's Project
          </a>
        </div>
      </nav>
    );
};
export default NavBar;
