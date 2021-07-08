import React from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const IncomeExpenses = () => {
  const {transactions} = React.useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expenses  = amounts.filter(cash => cash < 0).reduce((prev, curr)=>prev + curr).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +$ {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -$ {Math.abs(expenses)}
        </p>
      </div>
    </div>
  );
};
