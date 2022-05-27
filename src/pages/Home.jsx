import React from "react";
import ServerStatusCard from "../components/ServerStatusCard";
import SliceCard from "../components/SliceCard";
import Slice from "../components/Slice";
import TextCard from "../components/TextCard";

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
      <div className="home-header-container">
        <Slice>
          <div className="w-100 title-container">
            <h1 style={{ color: "white" }}>{showGreeting()}</h1>
            <hr style={{ color: "white" }}></hr>
          </div>
          <div className="text-container">
            <h2>News!</h2>
            <p>
              News! We were finally able to switch from monolith to
              micro-services architecture. Now the scalability of the project
              should be at a whole new level! We were also able to implement a
              registration system using tokens. Now all your data is protected!
              Also, with the help of micro services, we can open up great
              opportunities and on August 5 we are switching to a new version of
              the servers!
            </p>
            <hr style={{ color: "white" }}></hr>
          </div>
          <div className="slice-card-container">
            <SliceCard>
              <h5>
                <i class="fs-1 bi-disc-fill"></i> Total Playbacks:
              </h5>
              <h2>1275
              </h2>
            </SliceCard>
            <SliceCard>
              <h5>
                <i class="fs-1 bi-bug-fill"></i> Total Errors:
              </h5>
              <h2>2</h2>
            </SliceCard>
            <SliceCard>
              <h5>
                <i class="fs-1 bi-clock-fill"></i> Total LifeTime:
              </h5>
              <h2>1 day</h2>
            </SliceCard>
          </div>
        </Slice>
      </div>
      <div className="content-container">
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
