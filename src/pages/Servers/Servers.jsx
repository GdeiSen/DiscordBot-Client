import React, { useState, useEffect, useContext } from "react";
import UserListCard from "../../components/UserListCard/UserlistTab"
import ServerListCard from "../../components/ServerListCard/ServerlistTab"
import ServerPlaybackCard from "../../components/PlaybackCard/PlaybackTab"
import { useDispatch, useSelector } from "react-redux";

const Servers = () => {
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  let getDataCycle;
  function sendData(dataName, data) {
    store.websocketManager.sendData(dataName, data)
  }

  function getData(requestName, data) {
    store.websocketManager.getData(requestName, data)
  }

  function execute() {
    if (store.websocketManager == null) { return 0 };
  }

  useEffect(() => {
    execute();
    clearInterval(getDataCycle);
  }, [store.websocketManager])

  function getServerInfo(server) {
    getData('serverUsers', { serverId: server.ServerId });
    getData('currentPlayback', { serverId: server.ServerId });
    getData('serverQueue', { serverId: server.ServerId });
    dispatch({ type: "SET_CURRENT_SERVER", payload: server });
  }

  function showServerInfo(server) {
    getServerInfo(server);
    dispatch({ type: "SET_CURRENT_SERVER", payload: server });
    dispatch({ type: "SET_SERVER_LIST_VISIBLE", payload: false });
    dispatch({ type: "SET_USER_LIST_VISIBLE", payload: true });
    dispatch({ type: "SET_PLAYBACK_VISIBLE", payload: true });
  }

  function hideServerInfo() {
    dispatch({ type: "SET_CURRENT_SERVER", payload: null });
    dispatch({ type: "SET_SERVER_LIST_VISIBLE", payload: true });
    dispatch({ type: "SET_USER_LIST_VISIBLE", payload: false });
    dispatch({ type: "SET_USER_LIST", payload: null });
    dispatch({ type: "SET_CURRENT_SERVER_PLAYBACK", payload: null });
    dispatch({ type: "SET_PLAYBACK_VISIBLE", payload: false });
    clearInterval(getDataCycle);
  }

  return (
    <>
      <div className="container-fluid margin-top">
        <div className="d-flex flex-wrap justify-content-between">
          <UserListCard
            hideInfo={hideServerInfo}
            currentServer={store.currentServer}
            websocketManager={store.websocketManager}
            isVisible={store.userListVisible}>
            {store.userList}
          </UserListCard>
          <ServerPlaybackCard
            getData={getData}
            sendData={sendData}
            hideInfo={hideServerInfo}
            serverQueue={store.serverQueue}
            currentServer={store.currentServer}
            websocketManager={store.websocketManager}
            isVisible={store.playbackVisible}>
            {store.currentServerPlayback}
          </ServerPlaybackCard>
          <ServerListCard
            showInfo={showServerInfo}
            isVisible={store.serverListVisible}>
            {store.serverList}
          </ServerListCard>
        </div>
      </div>
    </>
  );
}

export default Servers;
