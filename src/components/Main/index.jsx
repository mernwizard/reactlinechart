import React from "react";
import "./index.scss";
import LineChart from "./LineChart";

const Main = () => {
  return (
    <div className="container">
      <div className="detailsContainer">
        <h1>Line Chart</h1>
        <p>Average rainfall for last 6 months</p>
      </div>
      <div className="chartContainer">
        <LineChart />
      </div>
    </div>
  );
};

export default Main;
