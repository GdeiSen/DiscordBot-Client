import React from "react";
const Home = () => {
    const showGreeting = () => {
        let date = new Date();
        let hours = date.getHours();
        let greetingMessage = hours < 12 ? 'Good Morning!' : hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
        return greetingMessage;
    }

    return (
        <div className="container-fluid margin-top">
            <div className="d-flex dashboard-card align-self-start">
                <div className="w-100">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h2>API Status</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home