import React from "react";
import "./Home.scss"
import { useSelector } from "react-redux";
import ServerStatusCard from '../../components/ServerStatusCard/ServerStatusCard'
import UsageBarCard from "../../components/UsageBarCard/UsageBarCard";
const Home = () => {
    const store = useSelector(state => state);
    const showGreeting = () => {
        let date = new Date();
        let hours = date.getHours();
        let greetingMessage = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
        return greetingMessage;
    }

    return (

        <div className="container-fluid margin-top">
            <h2>{showGreeting()}</h2>
            <hr></hr>
            <ServerStatusCard/>
            <UsageBarCard/>
        </div>

    )
}
export default Home