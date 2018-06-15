import React from "react";
import InfoRow from "../InfoRow";

const InfoGrid = ({ name, data }) => {
  const InfoList = data.map((e, i) => (
    <InfoRow description={e.description} amount={e.amount} key={i} />
  ));
  return (
    <div className="info-box" id={name}>
      <div className="income-type">{name}</div>
      <div className="item-list">{InfoList}</div>
    </div>
  );
};

export default InfoGrid;
