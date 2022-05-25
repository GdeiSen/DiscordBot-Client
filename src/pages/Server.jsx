import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentServer, setCurrentUsers } from "../store/reducers/serversSlice";
import UserListCard from "../components/UserListCard";
import SmallSlice from "../components/SmallSlice";
import ServerPlaybackCard from "../components/PlaybackCard";
import TextCard from "../components/TextCard";
import ServerService from "../services/serverService";
const Server = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const serverId = useParams().serverId;
  const serverService = new ServerService();
  useEffect(async () => {
    dispatch(setCurrentUsers(null))
    if (!store.servers.list) {await serverService.getServerList()};
    serverService.getPlayback(serverId);
    serverService.getUserList(serverId);
    serverService.setCurrentServer(serverId);
  }, []);
  return (
    <>
      <SmallSlice>
        <h2>Server Page</h2>
      </SmallSlice>
      <div className="medium-slice-container">
        <div className="text-card">
          <h4>Info</h4>
          <p>
            this page displays a table with the names of the servers on which
            this bot performs administration and entertainment work. A certain
            module sends a request to an array of servers when the client side
            connects to an intermediate server and receives the current state of
            the list
          </p>
        </div>
        <div className="slice-card-container">
          <div className="slice-card">
            <i className="bi-diagram-3"></i>
            <div className="text">
              <p>
                Main server system dynamicly connected to{" "}
                {store?.servers?.list?.length || "xx"} servers
              </p>
            </div>
          </div>
          <div className="slice-card">
            <i class="bi bi-shield-x"></i>
            <div className="text">
              <p>
                At the moment, the system runs according to the standards of
                discord administration
              </p>
            </div>
          </div>
        </div>
      </div>
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
