import React from "react";
import "./Home.scss";
import ServerStatusCard from "../../components/ServerStatusCard/ServerStatusCard";
import SliceCard from "../../components/SliceCard/SliceCard";
import Slice from "../../components/Slice/Slice";
import TextCard from "../../components/TextCard/TextCard";

const Home = () => {
  const showGreeting = () => {
    let date = new Date();
    let hours = date.getHours();
    let greetingMessage =
      hours < 12
        ? "Good Morning!"
        : hours < 18
        ? "Good Afternoon!"
        : "Good Evening!";
    return greetingMessage;
  };

  return (
    <>
      <Slice>
        <SliceCard>
          {" "}
          <h4>
            <i class="fs-4 bi-disc-fill"></i> Total Playbacks:
          </h4>
          <h3>235.5</h3>
        </SliceCard>
        <SliceCard>
          {" "}
          <h4>
            <i class="fs-4 bi-bug-fill"></i> Total Errors:
          </h4>
          <h3>56</h3>
        </SliceCard>
        <SliceCard>
          {" "}
          <h4>
            <i class="fs-4 bi-clock-fill"></i> Total LifeTime:
          </h4>
          <h3>5 days</h3>
        </SliceCard>
      </Slice>
      <div className="container-fluid margin-top">
        <h2>{showGreeting()}</h2>
        <hr></hr>
        <div className="d-flex flex-wrap justify-content-between">
          <ServerStatusCard />
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
export default Home;
