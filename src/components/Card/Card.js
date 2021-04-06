import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Card.scss";

const Card = ({ title, amount, value }) => {
  return (
    <div className="card">
      <span className="first_span">{title}</span>
      <div className="card_values">
        {amount ? <span>₦</span> : ""}
        <CurrencyFormat
          renderText={() => <h3>{amount ? amount : value}</h3>}
          decimalScale={2}
          // value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </div>
    </div>
  );
};

export default Card;
