import React, { useEffect } from "react";
import ServerListCard from "../../components/ServerlistCard";
import { useDispatch, useSelector } from "react-redux";
import TextCard from "../../components/TextCard";
import SmallSlice from "../../components/SmallSlice";
import MediumSlice from "../../components/MediumSlice";

const Servers = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    if (!store.connectionManager.manager) return 0;
    store.connectionManager.manager.getData("serverList");
  }, [store.connectionManager.manager]);

  return (
    <>
      <SmallSlice>
        <h2>ServerList Page</h2>
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
