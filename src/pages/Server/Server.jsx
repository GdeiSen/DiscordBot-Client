import React from "react";
import "./Server.scss"
import { useSelector } from "react-redux";
import ServerStatusCard from '../../components/ServerStatusCard/ServerStatusCard'

const Server = () => {
    const store = useSelector(state => state);
    

    return (
        <div className="container-fluid">
            <h2>Page Not Found!</h2>
            <h2>404</h2>
        </div>
    )
}
export default Server