import React from "react";
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="container">
        <img className="logo" src={require("../images/logo512.png")}></img>
      </div>
      Loading...
    </div>
  );
};

export default LoadingScreen;
