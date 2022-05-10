import React, { useState, useContext } from "react";
import AuthContext from "../../context/authorization";
const Login = () => {
  const {setAuthState} = useContext(AuthContext);
  const [login, setLogin] = useState({
    Login: "",
    Password: ""
  });

  const onChange = (e) => {
    const field = {};
    field[e.target.id] = e.target.value;
    setLogin({ ...login, ...field })
  };

  const loginFunc = async () => {
  
    setAuthState(true);
    //else { login.Login = ""; login.Password = "" }
  }

  const loginRememberFunc = (event) => {
    // temp = !temp;
    // if (temp) setAuthRemember(true);
    // else setAuthRemember(false);
  }
 
  return (<>
    <div className="d-flex container vh-100">
      <div className="row w-100 justify-content-center align-center align-self-center">
        <form>
          <div className="mb-3">
            <label for="Login" className="form-label">Login</label>
            <input type="text" className="form-control" id="Login" onChange={onChange} aria-describedby="emailHelp" value={login.Login} />
            <div id="emailHelp" className="form-text">Your Administrator Login</div>
          </div>
          <div className="mb-3">
            <label for="Password" className="form-label">Password</label>
            <input type="password" className="form-control" id="Password" onChange={onChange} value={login.Password} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" onClick={()=>{loginRememberFunc()}} id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => loginFunc()}>Login</button>
        </form>
      </div>
    </div></>
  );
};

export default Login;
