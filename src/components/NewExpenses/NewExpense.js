import React from "react";
import './NewExpense.css';
import ExpenseForm from "./NewForm";
const NewExpenses = (props) =>{
    const saveUserDateFromNewFormHandler =(enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    };
    return(
        <div className="new-expense">
           <ExpenseForm onRequerUserDateFromNewForm = {saveUserDateFromNewFormHandler}/>
        </div>
    )
}

export default NewExpenses;

