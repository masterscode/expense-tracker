import React from 'react'

export const Transaction = ({id, text, amount}) => {
    const sign = amount < 0 ? "-" : "+";
    return (
        <li className={amount < 0 ? "minus":"plus"} key={id}>
          {text} <span>{sign} ${Math.abs(amount)}</span>
          <button className="delete-btn">x</button>
        </li>
    )
}
