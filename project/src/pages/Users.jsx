import React, { useState } from "react";
import UserList from "../components/UserList";
import Modal from "../components/Modal/Modal";
import Axios from "axios";
import Loader from "react-loader-spinner";
const Users = () => {
  const [loading, setLoading] = useState(true);
  

  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      phone: "+375 (29) 194 56 74",
    },
    {
      id: 2,
      name: "Thanos",
      phone: "+375 (44) 194 65 32",
    },
    {
      id: 3,
      name: "Boris",
      phone: "+375 (29) 147 75 23",
    },
    {
      id: 4,
      name: "Alice",
      phone: "+375 (29) 147 23 23",
    },
  ]);

  const [user, setUser] = useState({
    name: "",
    phone: "",
    mail: "",
  });

const fetchUsers = async() => {
  const users = await Axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(users);
  setUsers(users.data);
}

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value })}
    else if (e.target.id == "phone") {
        setUser({ ...user, phone: e.target.value })}
     else if(e.target.id == "mail"){
      setUser({ ...user, mail: e.target.value });
    }
  };

  const addUser = () => {
    const id = Math.random() * 1;
    setUser({ ...user, id: id });
    setUsers([...users, user]);
    clear();
  };

  const removeUser = (id) => {
    const confirm = window.confirm("Are You Sure?\nIt Cannot Be Returned");
    if (confirm) setUsers(users.filter((user) => user.id !== id));
  };

  const clear = () => {
    setUser({ name: "", phone: "", mail: ""});
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <button onClick = {()=>fetchUsers()}>fetch Users</button>
          <Modal visible={showModal} setVisible={setShowModal}>
            <>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="name"
                  type="text"
                  class="validate"
                  value={user.name}
                  placeholder="EnterName"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input
                  id="phone"
                  type="tel"
                  class="validate"
                  value={user.phone}
                  placeholder="EnterPhone"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">mail</i>
                <input
                  id="mail"
                  type="text"
                  class="validate"
                  value={user.mail}
                  placeholder="EnterMail"
                  onChange={onChange}
                />
              </div>
              <a
                  id="Add"
                  className="waves-effect waves-light btn m-1"
                  onClick={() => addUser()}
                >
                  Add
                </a>
                <a
                  className="waves-effect waves-light btn m-1 right"
                  onClick={() => clear()}
                >
                  Cancel
                </a>
            </>
          </Modal>
          <div className="row m-1">
            <div className="col s4">
              <div className="row m-12" />
              <div className="row m-12">
                <a
                  className="waves-effect waves-light btn"
                  onClick={() => setShowModal(!showModal)}
                >
                  Add user
                </a>
              </div>
            </div>
            <div className="col s8"></div>
          </div>
          {/* {loading? (
            <div className = "container center"><Loader
            type="Bars"
            color="#FF7375"
            height={100}
            width={100}
            timeout={3000}
          /></div>
          ) : (
          <UserList search={true} deleteUser={removeUser}>
            {users}
          </UserList>
          )} */}
          <UserList search={true} deleteUser={removeUser}>
            {users}
          </UserList>
      </div>
    </div>
  );
};

export default Users;
