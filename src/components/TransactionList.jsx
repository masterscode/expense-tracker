import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "../contexts/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(({ id, text, amount }, index) => (
          <Transaction key={id} id={id} text={text} amount={amount} />
        ))}
      </ul>
    </>
  );
};
