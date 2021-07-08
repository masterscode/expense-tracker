import React from 'react';
import { GlobalContext } from '../contexts/GlobalState';

export const Transaction = ({id, text, amount}) => {
    const sign = amount < 0 ? "-" : "+";

    const {deleteTransaction} = React.useContext(GlobalContext);

    return (
        <li className={amount < 0 ? "minus":"plus"} key={id}>
          {text} <span>{sign} ${Math.abs(amount)}</span>
          <button className="delete-btn" onClick={()=> deleteTransaction(id)}>x</button>
        </li>
    );
}
