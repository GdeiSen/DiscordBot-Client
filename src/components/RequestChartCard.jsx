import { Chart } from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Store } from "../store";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const createData = () => {
  let labels = [];
  for (let index = 0; index < 7; index++) {
    let date = moment().subtract(index, "days").format("ddd MMMM DD YYYY");
    labels.unshift(date);
  }
  const data = {
    labels,
    datasets: [
      {
        label: "All Requests",
        data: labels.map(date => Store.getState().servers.stats.filter((element) => {return element.date == date})[0].stats.ALLCount
        ),
        borderColor: "#BBC1CB",
        backgroundColor: "#BBC1CB",
        tension: 0.4,
      },
      {
        label: "SP Song Requests",
        data: labels.map(date => Store.getState().servers.stats.filter((element) => {return element.date == date})[0].stats.SPCount
        ),
        borderColor: "#00A6BA",
        backgroundColor: "#000000",
        tension: 0.4,
      },
      {
        label: "YT Song Requests",
        data: labels.map(date => Store.getState().servers.stats.filter((element) => {return element.date == date})[0].stats.YTCount
        ),
        borderColor: "#0068FF",
        backgroundColor: "#000000",
        tension: 0.4,
      },
      {
        label: "SP Playlist Requests",
        data: labels.map(date => Store.getState().servers.stats.filter((element) => {return element.date == date})[0].stats.SPPLCount
        ),
        borderColor: "#00A6BA",
        backgroundColor: "#00A6BA",
        tension: 0.4,
      },
      {
        label: "YT Playlist Requests",
        data: labels.map(date => Store.getState().servers.stats.filter((element) => {return element.date == date})[0].stats.YTPLCount
        ),
        borderColor: "#0068FF",
        backgroundColor: "#0068FF",
        tension: 0.4,
      },
    ],
  };
  return data;
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
    },
  },
};

const RequestChartCard = () => {
  return (
    <>
      <div className="d-flex dashboard-card">
        <div>
          <div className="header">
            <div className="icon">
              <i className="fs-1 bi-activity"></i>
            </div>
            <div className="name">
              <h2>Request Statistics</h2>
            </div>
          </div>
          <div className="large-field">
            {Store.getState().servers.stats && (
              <Line options={options} data={createData()} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestChartCard;
