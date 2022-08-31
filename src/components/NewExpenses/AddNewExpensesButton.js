import React from "react";
import "./AddNewExpensesButton.css";
const AddExpensesButton =() =>{
    const newButtonAddExpense =(e)=>{
        e.preventDefault();
        console.log("click");
    }
return(
    <>
    <button 
    type="submit"
    onClick={newButtonAddExpense}
    className="new-expenses"> 
    Add New Expenses
    </button>
    
    </>
)

}
export default AddExpensesButton;