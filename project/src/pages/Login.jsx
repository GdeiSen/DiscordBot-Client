import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context";
import Accounts from "../data/Accounts"
import Modal from "../components/Modal/Modal"
const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [login, setLogin] = useState({
    FName: "",
    LName: "",
    Password: ""
});
const [showModal, setShowModal] = useState(false);
const [error, setError] = useState();
const Account = Accounts[0];
const onChange = (e) => {
  const field = {};
  field[e.target.id] = e.target.value;
  setLogin({...login,...field})
  setError('');
  // if (e.target.id == "FName") {
  //   setLogin({ ...login, FName: e.target.value })}
  // else if (e.target.id == "LName") {
  //   setLogin({ ...login, LName: e.target.value })}
  //  else if(e.target.id == "Password"){
  //   setLogin({ ...login, Password: e.target.value });
  // }
};
const loginFunc = () => {
  if(Account.FName == login.FName && 
    Account.LName == login.LName &&
     Account.Password == login.Password){
    setIsAuth(true)
    localStorage.setItem('auth','true')
  }
  else{//setShowModal(true);
  login.FName = "";login.LName = "";login.Password =""}
  setError('Wrong Account Data')
}
  return (
    <div className = "container">
      <Modal visible={showModal} setVisible={setShowModal}>
          <>
            <div class="row">
              <h3>Password or login is incorrect!</h3>
            </div>
          </>
        </Modal>
        <h3>Login Page</h3>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" placeholder="First Name" class="validate" id = 'FName' value={login.FName} onChange={onChange}/>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" placeholder="Last Name" class="validate" id = 'LName' value={login.LName} onChange={onChange}/>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" placeholder="Password" class="validate" id = 'Password' value={login.Password} onChange={onChange}/>
          
        </div>
      </div>
      {error && <h5 className = "red-text">{error}</h5>}
    </form>
  </div>
  <button class="btn waves-effect waves-light black left" type="submit" onClick = {()=>loginFunc()}>Submit
    <i class="material-icons right">send</i>
  </button>
    </div>
  );
};

export default Login;
