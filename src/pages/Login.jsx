import React, { useState, useContext } from "react";
import AuthService from "../services/authService";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authService = new AuthService();
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-background-top">
          <img className="logo" src={require("../images/logo512.png")}></img>
        </div>
        <div className="login-page-background-bottom">
          <div className="info-container">
            <div className="row">
              <p>Baverio Dashboard login system 2022</p>
            </div>
            <div className="row">
              <p>If you have any questions about the health of the system, please email us</p>
            </div>
            <div className="row">
              <p>BaverioHelp@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form className="form">
            <div className="mb-3">
              <label for="Login" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="Login"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
                value={email}
              />
            </div>
            <div className="mb-3">
              <label for="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onClick={() => {}}
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>
            <input
              type="button"
              className="btn btn-primary"
              onClick={() => authService.login(email, password)}
              value="Login"
            ></input>
            <input
              type="button"
              className="btn "
              onClick={() => authService.registration(email, password)}
              value="Register"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
