import React from "react";
import cutlery from "../../assets/cutlery.png";
import "./ExpenseCard.scss";

const ExpenseCard = () => {
  return (
    <div className="ExpenseCard">
      <div className="ExpenseCard_icon">
        <img src={cutlery} alt="" />
      </div>
    </div>
  );
};

export default ExpenseCard;
