import SideNavBar from "./NavBar";
import TopNavBar from "./TopNavBar";
import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setInnerWidth(window.innerWidth);
  });
  if (innerWidth >= 1080) return mdLayout();
  else return smLayout();
};

function mdLayout() {
  return (
    <div className="layout-container">
      <div className="layout-container-row h-100">
        <div className="side-nav-bar-column">
          <SideNavBar />
        </div>
        <div className="layout-content-column">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function smLayout() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
export { Layout };
