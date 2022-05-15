import React, { useEffect } from "react";
import "./Server.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserListCard from "../../components/UserListCard";
import SmallSlice from "../../components/SmallSlice";
import { setCurrentServer, setCurrentUsers } from "../../store/reducers/serversSlice";
import ServerPlaybackCard from "../../components/PlaybackCard";
import TextCard from "../../components/TextCard";
const Server = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const serverId = useParams().serverId;

  useEffect(() => {
    dispatch(setCurrentUsers(null))
    if (!store.connectionManager.manager) return 0;
    if (!store.servers.list) {store.connectionManager.manager.getData(`serverList`); return 0};
    store.connectionManager.manager.getData(`currentPlayback/${serverId}`);
    store.connectionManager.manager.getData(`serverQueue/${serverId}`);
    store.connectionManager.manager.getData(`userList/${serverId}`);
    dispatch(setCurrentServer(store.servers.list.find((server) => server.id == serverId)));
  }, [store.connectionManager, store.servers.list]);
  return (
    <>
      <SmallSlice>
        <h2>Server Page</h2>
      </SmallSlice>
      <div className="content-container">
        <div className="d-flex flex-wrap justify-content-between">
          <UserListCard></UserListCard>
          <ServerPlaybackCard></ServerPlaybackCard>
          <TextCard>
            <h2>Some Information Here!</h2>
            <p>
              This page is connected to databases and displays the current
              values of statistics. At the moment, this system has modest
              functionality, but it can be expanded thanks to an optimized
              server design.
            </p>
          </TextCard>
        </div>
      </div>
    </>
  );
};
export default Server;
