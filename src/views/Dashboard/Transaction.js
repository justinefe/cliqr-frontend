import React from "react";
import Card from "../../components/Card/Card";
import "./Transaction.scss";

const Transaction = () => {
  return (
    <div className="Transaction">
      <Card title="TOTAL SPENT" amount="59000" />
      <Card title="TOTAL INCOME" amount="74510" />
      <Card title="TRANSACTIONS" value="300" />
    </div>
  );
};

export default Transaction;
