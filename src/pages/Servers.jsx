import React, { useState, useEffect, useContext } from "react";
import ServerInfo from "../components/Server/ServerMembers"
import ServerList from "../components/Server/ServerList"
import ServerCurrentPlayback from "../components/Server/ServerPlayback"
import { useDispatch, useSelector } from "react-redux";

const Servers = () => {
  const [serverList, setServerList] = useState();
  const [serverInfovisibility, setServerInfovisibility] = useState(false);
  const [serverListVisibility, setServerListvisibility] = useState(true);
  const [currentServer, setCurrentServer] = useState('');
  const [serverInfo, setServerInfo] = useState();
  const [serverCurrentPlayback, setserverCurrentPlayback] = useState();
  const [serverQueue, setServerQueue] = useState();
  const dispatch = useDispatch();
  const globalMemory = useSelector(state => state);
  let { websocketManager } = globalMemory.websocketManager

  function execute() {
    if (websocketManager == null){return 0}//NEED TO BE FIXED!
    websocketManager.on('MESSAGE', (type, data) => {
      switch (type) {
        case "servers": setServerList(data); dispatch({ type: "SET_SERVER_LIST", payload: data });console.log(data); break;
        case "serverUsers": setServerInfo(data); dispatch({ type: "SET_USER_LIST", payload: data });console.log(data); break;
        case "currentPlayback": setserverCurrentPlayback(data); dispatch({ type: "SET_CURRENT_SERVER_PLAYBACK", payload: data }); break;
        case "serverQueue": setServerQueue(data); dispatch({ type: "SET_SERVER_QUEUE", payload: data }); break;
        default: break
      }
    })
  }

  function sendData(request, data) {
    websocketManager.sendData(request, data)
  }

  useEffect(() => {
    execute();
  }, [websocketManager])

  function getServerInfo(server) {
    sendData('getServerUsers', { serverId: server.ServerId });
    sendData('getCurrentPlayback', { serverId: server.ServerId });
    sendData('getServerQueue', { serverId: server.ServerId });
    setCurrentServer(server);
    dispatch({ type: "SET_CURRENT_SERVER", payload: server });
    setServerListvisibility(!serverListVisibility);
    setServerInfovisibility(!serverInfovisibility);
  }

  function showServerInfo(server) {
    getServerInfo(server);
    setCurrentServer(server);
    setServerListvisibility(!serverListVisibility);
    setServerInfovisibility(!serverInfovisibility);
  }

  function hideServerInfo() {
    setServerListvisibility(!serverListVisibility);
    setServerInfovisibility(!serverInfovisibility);
    setServerInfo('');
    setserverCurrentPlayback('');
  }

  return (
    <>
      <div className="container-fluid margin-top">
        <div className="d-flex flex-wrap justify-content-between">
          <ServerInfo
            hideInfo={hideServerInfo}
            currentServer={currentServer}
            infoVisible={serverInfovisibility}>
            {serverInfo}
          </ServerInfo>
          <ServerCurrentPlayback
            sendData={sendData}
            hideInfo={hideServerInfo}
            serverQueue={serverQueue}
            currentServer={currentServer}
            visible={serverInfovisibility}>
            {serverCurrentPlayback}
          </ServerCurrentPlayback>
          <ServerList
            showInfo={showServerInfo}
            serversVisible={serverListVisibility}>
            {serverList}
          </ServerList>
        </div>
      </div>
    </>
  );
}

export default Servers;
