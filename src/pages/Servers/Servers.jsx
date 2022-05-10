import React, { useEffect } from "react";
import ServerListCard from "../../components/ServerListCard/ServerlistTab";
import { useDispatch, useSelector } from "react-redux";
import TextCard from "../../components/TextCard/TextCard";
import SmallSlice from "../../components/SmallSlice/SmallSlice";

const Servers = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    if(!store.connectionManager.manager) return 0;
    store.connectionManager.manager.getData('serverList')
  }, [store.connectionManager.manager]);

  return (
    <>
      <SmallSlice><h2>ServerList Page</h2></SmallSlice>
      <div className="content-container">
        <div className="d-flex flex-wrap justify-content-between">
          <ServerListCard>{store.servers.list}</ServerListCard>
          <TextCard>
            <h2>Some Information Here</h2>
            <p>
              this page displays a table with the names of the servers on which
              this bot performs administration and entertainment work. A certain
              module sends a request to an array of servers when the client side
              connects to an intermediate server and receives the current state
              of the list
            </p>
          </TextCard>
        </div>
      </div>
    </>
  );
};

export default Servers;
