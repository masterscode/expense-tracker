import React, {useState, useContext} from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000000);
    addTransaction({id,text, amount: +amount});
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." value={text} onChange={({target})=>setText(text=>target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={({target})=>setAmount(amount=>target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
