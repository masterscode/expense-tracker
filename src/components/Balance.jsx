import React from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const Balance = () => {
  const {transactions} = React.useContext(GlobalContext);
  const amounts = transactions.map(({amount}) => amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  
   return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
