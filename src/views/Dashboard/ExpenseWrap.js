import React from "react";
import ExpenseCard from "../../components/ExpenseCard";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails";
import "./Expensesandlike.scss";

const ExpenseWrap = () => {
  return (
    <div className="Expensesandlike_bottom">
      <div className="Expensesandlike_bottom_expense">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
      <div className="wrap">
        <PersonalDetails classes="horinzontal" />
      </div>
    </div>
  );
};

export default ExpenseWrap;
