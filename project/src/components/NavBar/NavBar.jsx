import React from "react";
import { Link } from "react-router-dom"
import '../NavBar/NavBar.css'
const NavBar = () => {
  return (
    <nav>
    <div className="nav-wrapper black">
      <a href="#" className="brand-logo margin-left">Gordey's Project</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down margin-right">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </div>
  </nav>
 
  ); 
}
export default NavBar;
