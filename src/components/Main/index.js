import React from "react";
import InfoGrid from "../InfoGrid";
import InfoRow from "../InfoRow";

const Main = props => {
  const { incomeData, expenseData, totalIncome, totalExpense } = props.data;
  return (
    <div className="main">
      <div className="main-grid">
        <InfoGrid data={incomeData} name="Income" />
        <InfoGrid data={expenseData} name="Expense" />
      </div>
      <div className="total-grid">
        <div className="total-box">
          <InfoRow description="Total Income" amount={totalIncome} />
        </div>
        <div className="total-box">
          <InfoRow description="Total Expense" amount={totalExpense} />
        </div>
        <div className="final">
          <span>Total: {totalIncome - totalExpense} $</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
