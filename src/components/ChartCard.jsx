import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ChartCard = () => {
  return (
    <>
      <div className="d-flex dashboard-card">
        <div>
          <div className="header">
            <div className="icon">
              <i class="fs-1 bi-hdd-stack-fill"></i>
            </div>
            <div className="name">
              <h2>Current Server List</h2>
            </div>
          </div>
          <div className="field">
            {showCharts()}
          </div>
        </div>
      </div>
    </>
  );

  function showSpinner() {
    return (
      <>
        {showSpinnerState && !store?.servers?.list && !showErrorState && (
          <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }

  function showError() {
    return (
      <>
        {showErrorState && !store?.servers?.list && (
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oh Snap!</h4>
            <p>Unfortunately, there were problems connecting to the server!</p>
            <hr />
            <p className="mb-0">
              Try restarting the page, if the error persists, use technical
              support
            </p>
          </div>
        )}
      </>
    );
  }

  function showCharts() {
    return (
      <>
        
      </>
    );
  }
};
export default ChartCard;
