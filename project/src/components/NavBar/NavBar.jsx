import React from "react";
import { Link } from "react-router-dom"
import '../NavBar/NavBar.css'
const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Gordey's Project</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
      </ul>
    </div>
  </nav>
 
  ); 
}
export default NavBar;
