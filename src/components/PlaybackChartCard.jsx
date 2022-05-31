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
import WarningField from "./WarningField";
import InfoField from "./InfoField";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const createData = (props) => {
  let labels = [];
  for (let index = 0; index < 7; index++) {
    let date = moment().subtract(index, "days").format("ddd MMMM DD YYYY");
    labels.unshift(date);
  }
  let data;
  if (props.isMain == "false") {
    data = {
      labels,
      datasets: [
        {
          label: "Playbacks",
          data: labels.map(
            (date) =>
              Store.getState().servers.currentServer.stats.filter((element) => {
                return element.date == date;
              })[0].stats.PlaybackCount
          ),
          borderColor: "#0060FF",
          backgroundColor: "#0060FF",
          tension: 0.4,
        },
      ],
    };
  } else if (props.isMain == "true") {
    data = {
      labels,
      datasets: [
        {
          label: "Playbacks",
          data: labels.map(
            (date) =>
              Store.getState().servers.stats.filter((element) => {
                return element.date == date;
              })[0].stats.PlaybackCount
          ),
          borderColor: "#0060FF",
          backgroundColor: "#0060FF",
          tension: 0.4,
        },
      ],
    };
  }

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

const PlaybackChartCard = (props) => {
  return (
    <>
      <div className="d-flex large-dashboard-card">
        <div>
          <div className="header">
            <div className="icon">
              <i className="fs-1 bi-activity"></i>
            </div>
            <div className="name">
              <h2>Playback Statistics</h2>
            </div>
          </div>
          {props.children}
          <div className="large-field">
            {Store.getState().servers.stats && (
              <Line options={options} data={createData(props)} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaybackChartCard;
