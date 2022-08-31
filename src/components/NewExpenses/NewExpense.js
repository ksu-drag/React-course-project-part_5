import React from "react";
import './NewExpense.css';
import ExpenseForm from "./NewForm";
import AddExpensesButton from "./AddNewExpensesButton";
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
            <AddExpensesButton></AddExpensesButton>
        </div>
    )
}

export default NewExpenses;

