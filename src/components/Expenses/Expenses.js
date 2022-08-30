import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');


  const expensesFilterHandler = (e)=>{
    console.log('Expenses.js');
    setFilterYear(e);
    console.log(e);
  };
   
  const correctYear = props.items.filter((expenses) =>{
    return( expenses.date.getFullYear().toString() === filterYear)
  })
  // ---------- THIRD SOLUTION 
  let currentNumeberExpenses = <p className='no-expenses'>No exepenses found...</p>
  if (correctYear.length > 0) {
    currentNumeberExpenses = correctYear.map((expenses) => (
      <ExpenseItem 
        key ={expenses.id}// for avoid a problem with react authentification list of data 
        title ={expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
        />
     ));
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onRequerExpensesFilter ={expensesFilterHandler} value ={filterYear}/>
        {currentNumeberExpenses}
      </Card>
    </div>
  );
}

export default Expenses;

//---------- FIRST SOLUTION
// {correctYear.length === 0 && <div> No expenses found.</div>} 
// {correctYear.length > 0 && correctYear.map((expenses) => (
//     <ExpenseItem 
//     key ={expenses.id}
//     title ={expenses.title}
//     amount = {expenses.amount}
//     date = {expenses.date}/>
//  ));}

//---------- SECOND SOLUTION 
// {correctYear.length === 0 ? <p>No expenses found.<p/> : correctYear.map((expenses) => (
//     <ExpenseItem 
//     key ={expenses.id}
//     title ={expenses.title}
//     amount = {expenses.amount}
//     date = {expenses.date}/>
//  )); }

