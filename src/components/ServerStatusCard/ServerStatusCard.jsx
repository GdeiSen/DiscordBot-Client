import React from "react";
import { useSelector } from "react-redux";
import "../main.scss"
const ServerStatusCard = () => {

    const store = useSelector(state => state);
    const showStatusIndicator = (status) => {
        if (status === "connected") return (<i class="fs-2 bi-check-circle"></i>);
        else if (status === "disconnected") return (<i class="fs-2 bi-exclamation-circle"></i>);
        else return <i class="fs-2 bi-exclamation-circle"></i>;
    }

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
                            <h5>Data Server Status:</h5>
                            {store.serverStatus.dataStatus}
                        </div>
                        {showStatusIndicator(store.serverStatus.dataStatus)}
                    </div>
                    <div className="d-flex justify-content-between align-items-center field">
                        <div>
                            <h5>Client Sockets Status:</h5>
                            {store.serverStatus.socketStatus}
                        </div>
                        {showStatusIndicator(store.serverStatus.socketStatus)}
                    </div>
                    <div className="d-flex justify-content-between align-items-center field">
                        <div>
                            <h5>Client HTTP Status:</h5>
                            {store.serverStatus.httpStatus}
                        </div>
                        {showStatusIndicator(store.serverStatus.httpStatus)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ServerStatusCard