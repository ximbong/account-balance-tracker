import React from "react";

const InfoRow = ({ description, amount }) => {
  return (
    <div className="item">
      <div className="item-name"> {description}</div>
      <div className="amount">
        <span className="number">{amount}</span>
        <span className="currency">$</span>
      </div>
      <div className="time">15/6/2018 - 19:00</div>
    </div>
  );
};

export default InfoRow;
