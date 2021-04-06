import React from "react";
import "./Dashboardlayer.scss";

const DashboardLayer = ({ children }) => {
  return (
    <div className="container dashboardlayer">
      <div className="dashboard_navbar"></div>
      <div className="dashboard_body">{children}</div>
    </div>
  );
};

export default DashboardLayer;
