import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context";
const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  return (
    <div className = "container">
        <h3>Login Page</h3>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" placeholder="First Name" class="validate"/>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" placeholder="Last Name" class="validate"/>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" placeholder="Password" class="validate"/>
          
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" placeholder="Email" class="validate"/>
          
        </div>
      </div>
    </form>
  </div>
  <button class="btn waves-effect waves-light black" type="submit" onClick = {()=>setIsAuth(true)}>Submit
    <i class="material-icons right">send</i>
  </button>
    </div>
  );
};

export default Login;
