import React from "react";
import ExpenseCard from "../../components/ExpenseCard";
import PersonalDetails from "../../components/PersonalDetails/PersonalDetails";
import "./Expensesandlike.scss";
import ExpenseWrap from "./ExpenseWrap";

const Expensesandlike = () => {
  return (
    <div className="Expensesandlike">
      <div className="Expensesandlike_top">
        <span className="first_sp">RECURRING EXPENSES</span>
        <span className="second_span">USERS LIKE "Jude Agboola</span>
      </div>
      <div className="expenselike_wrap">
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
        <ExpenseWrap />
      </div>
    </div>
  );
};

export default Expensesandlike;
