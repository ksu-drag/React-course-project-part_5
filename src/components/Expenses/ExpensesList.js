import './ExpensesList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList  =(props)=>{
// ---------- THIRD SOLUTION 
    if(props.items.length === 0){
        return (<div className='no-expenses'>No expenses found...</div>)
    }

    return(
        <div>
            {props.items.map((expenses) => (
            <ExpenseItem 
                key ={expenses.id}// for avoid a problem with react authentification list of data 
                title ={expenses.title}
                amount = {expenses.amount}
                date = {expenses.date}
                />
            ))}
        </div>
    )
}

export default ExpenseList;


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

