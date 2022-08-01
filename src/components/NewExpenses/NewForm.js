
import React, { useState } from "react";
import './NewForm.css';

const ExpenseForm = (props)=> {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) =>{setEnteredTitle(e.target.value);}
    const amountChangeHandler = (e) =>{setEnteredAmount(e.target.value)} ;
    const dateChangeHandler = (e) =>{setEnteredDate(e.target.value)};

    // WE HAVE ANOTHER WAY TO DOING THIS useSTATE(), BUT in this way we should save state value, which dont update and that happned because when one value update, update other state two/ we update them together  
    // const [userInput, setUserInput] = useState({enteredTitle: '',enteredAmount: '',enterdeDate: '',});
    // const changeTitle =(e)=>{setUserInput({...userInput,enteredTitle: e.target.value,});console.log(userInput);}//onChange ={changeTitle}
    // const changeAmount = (e)=>{setUserInput({...userInput,enteredAmount: e.target.value,});console.log(userInput);}//onChange ={changeAmount}
    // const changeDate =(e)=>{setUserInput({...userInput,enterdeDate: e.target.value,});console.log(userInput);}//onChange ={changeDate}
    // BUT IF WE DEPEND AT THE PREW STATE, WE SHOULD DO THIS WAY: 
    // const [userInput, setUserInput] = useState({enteredTitle: '',enteredAmount: '',enterdeDate: '',});
    // const titleChangeHandler2 =(e)=>{setUserInput((prewState)=>{return{...prewState,enteredTitle: e.target.value,}})}

    const submitHandler = (e)=>{
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount,
        }
        props.onRequerUserDateFromNewForm(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('')
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01'  onChange={amountChangeHandler} value={enteredAmount}/>               
                </div>    
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type ="date" min='2019-01-01' max='2022-12-31'  onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type ="submit">Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm;
