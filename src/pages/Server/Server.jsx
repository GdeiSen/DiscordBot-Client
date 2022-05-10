import React, { useEffect } from "react";
import "./Server.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import UserListCard from "../../components/UserListCard/UserlistCard";
import SmallSlice from "../../components/SmallSlice/SmallSlice";
import { setCurrentServer, setCurrentUsers } from "../../store/reducers/serversSlice";
const Server = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const serverId = useParams().serverId;

  useEffect(() => {
    dispatch(setCurrentUsers(null))
    if (!store.connectionManager.manager) return 0;
    if (!store.servers.list) {store.connectionManager.manager.getData(`serverList`); return 0};
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
          <UserListCard></UserListCard>
        </div>
      </div>
    </>
  );
};
export default Server;
