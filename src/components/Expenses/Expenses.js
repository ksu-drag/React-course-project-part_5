import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
  
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onRequerExpensesFilter = {expensesFilterHandler} value ={filterYear}/>
        <ExpensesChart expenses = {correctYear}/>
        <ExpenseList items = {correctYear}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;


