import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/Modal/ModalServerInfo";
const Servers = () => {
  const socket = useRef();
  const [serverList, setServerList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [serverInfo, setServerInfo] = useState();
  function connect() {
    socket.current = new WebSocket('ws://localhost:5000')
    socket.current.onopen = () => {
      if (socket.current.readyState === 1) {
        const message = {
          event: 'connection'
        }
        socket.current.send(JSON.stringify(message))
      }
    }
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      if(message.type == "serversData")setServerList(message.data);
      else if(message.type == "serversInfoData"){setServerInfo(message.data)}
    }
    socket.current.onclose = () => {
      console.log('Socket закрыт')
    }
    socket.current.onerror = () => {
      console.log('Socket произошла ошибка')
    }
  }
  useEffect(() => {
    connect();
  }, [])

  function showInfo(id){
    console.log(id);
    if (socket.current.readyState === 1) {
      const message = {
        event: 'getinfo',
        id: id
      }
      socket.current.send(JSON.stringify(message))
    }
    setShowModal(!showModal)
  }

  return (
    <>
    <Modal visible={showModal} setVisible={setShowModal}>
          <>
          <table>
        <thead>
          <tr>
            {serverInfo && Object.keys(serverInfo[0]).map((key) => (<th>{key}</th>))}
          </tr>
        </thead>
        <tbody>
          {serverInfo && serverInfo.map((server) => (
            <tr key={server.id}>
              {serverList && Object.values(server).map((element) => (<td>{element}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
          </>
        </Modal>
    <div className="container">
      <table>
        <thead>
          <tr>
            {serverList && Object.keys(serverList[0]).map((key) => (<th>{key}</th>))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {serverList && serverList.map((server) => (
            <tr key={server.id}>
              {serverList && Object.values(server).map((element) => (<td>{element}</td>))}
              <td><i class="small material-icons pointer"
                onClick={() =>
                  showInfo(server.ServerId)
                }>chevron_right</i></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Servers;
