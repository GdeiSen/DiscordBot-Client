import React from "react";
import { useSelector } from "react-redux";
const ServerStatusCard = () => {
  const store = useSelector((state) => state);
  const showStatusIndicator = (status) => {
    if (status === "connected") return <i class="fs-2 bi-check-circle"></i>;
    else if (status === "disconnected")
      return <i class="fs-2 bi-exclamation-circle"></i>;
    else return <i class="fs-2 bi-exclamation-circle"></i>;
  };

  return (
    <div className="d-flex dashboard-card">
      <div className="w-100">
        <div className="flex-column">
          <div className="d-flex ">
            <h2>API Status</h2>
          </div>
          <div className="d-flex justify-content-between align-items-center field">
            <div>
              <h5>App Server Status:</h5>
              {store.serverStatus.appStatus}
            </div>
            {showStatusIndicator(store.serverStatus.appStatus)}
          </div>
          <div className="d-flex justify-content-between align-items-center field">
            <div>
              <h5>Database Micro Service Status:</h5>
              {store.serverStatus.dataStatus}
            </div>
            {showStatusIndicator(store.serverStatus.dataStatus)}
          </div>
          <div className="d-flex justify-content-between align-items-center field">
            <div>
              <h5>Token Micro Service Status:</h5>
              {store.serverStatus.tokenStatus}
            </div>
            {showStatusIndicator(store.serverStatus.tokenStatus)}
          </div>
          <div className="d-flex justify-content-between align-items-center field">
            <div>
              <h5>Main Server Status:</h5>
              {store.serverStatus.serverStatus}
            </div>
            {showStatusIndicator(store.serverStatus.serverStatus)}
          </div>
          <div className="d-flex justify-content-between align-items-center field">
            <div>
              <h5>Socket Status:</h5>
              {store.serverStatus.socketStatus}
            </div>
            {showStatusIndicator(store.serverStatus.socketStatus)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStatusCard;
