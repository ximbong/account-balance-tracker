import React from "react";

import InfoGrid from "../InfoGrid";
import InfoRow from "../InfoRow";

const Main = props => {
  const { incomeData, expenseData, incomeTotal, expenseTotal } = props.data;

  const finalAmount = incomeTotal - expenseTotal;

  return (
    <div className="main">
      <div className="main-grid">
        <InfoGrid data={incomeData} showGraph={props.showGraph} name="income" />
        <InfoGrid data={expenseData} showGraph={props.showGraph} name="expense" />
      </div>
      <div className="total-grid">
        <div className="total-box">
          <InfoRow description="Total Income" amount={incomeTotal} />
        </div>
        <div className="total-box">
          <InfoRow description="Total Expense" amount={expenseTotal} />
        </div>
        <div className="final">
          <span>Total: {finalAmount} $</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
