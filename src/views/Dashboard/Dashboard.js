import React from "react";
import PersonalDetails from "../../components/PersonalDetails";
import Transaction from "./Transaction";
import "./Dashboard.scss";
import Expensesandlike from "./Expensesandlike";
import Sidebar from "./Sidebar";
//  DashboardLayer

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard_content">
        <PersonalDetails classes="vertical" />
        <Transaction />
        <Expensesandlike />
      </div>
    </div>
  );
};

export default Dashboard;
