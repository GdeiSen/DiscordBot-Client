import React from "react";
import { useSelector } from "react-redux";

const ServerStatusCard = () => {

    const store = useSelector(state => state);
    const showStatusIndicator = (status) => {
        if (status == "connected") return "indicator green";
        else if (status == "disconnected") return "indicator red";
        else return "indicator yellow";
    }

    return (
        <div className="d-flex dashboard-card align-self-start">
            <div className="w-100">
                <div className="flex-column">
                    <div className="d-flex ">
                        <h2>API Status</h2>
                    </div>
                    <div className="d-flex justify-content-between align-items-center field">
                        <div>
                            <h5>Main Server Status:</h5>
                            <h6>{store.mainServerStatus}</h6>
                        </div>
                        <div className={showStatusIndicator(store.mainServerStatus)}></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center field">
                        <div>
                            <h5>External Server Status:</h5>
                            <h6>{store.externalServerStatus}</h6>
                        </div>
                        <div className={showStatusIndicator(store.externalServerStatus)}></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ServerStatusCard