import React, { useState } from 'react';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css'



function App() {

  return (
    <>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default App
