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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onRequerExpensesFilter ={expensesFilterHandler} value ={filterYear}/>
       {props.items.map((expenses) => (
        <ExpenseItem 
          key ={expenses.id}// for avoid a problem with react authentification list of data 
          title ={expenses.title}
          amount = {expenses.amount}
          date = {expenses.date}
          />
       ))}
       
        
      </Card>
    </div>
  );
}

export default Expenses;
