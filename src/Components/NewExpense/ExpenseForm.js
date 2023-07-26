import React,{useState} from "react";

import "./ExpenseForm.css"

function ExpenseForm(props) {
    
    const [enteredTitle,setEnteredTitle] = useState(""); 
    const [enteredAmount,setEnteredAmount] = useState("");
    const [enteredDate,setEnteredDate] = useState("");

    function onTitleInputChangedHandler(event){
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
      }

    function onAmountInputChangedHandler(event){
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    }

    function onDateInputChangedHandler(event){
      setEnteredDate(event.target.value);
      console.log(enteredDate);
    }

    function submitFormHandler(event){
      event.preventDefault();
      const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date : new Date(enteredDate)
      }
      
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
      props.onSaveExpenseData(expenseData);

    }


  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={enteredTitle} onChange={onTitleInputChangedHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={enteredAmount} onChange={onAmountInputChangedHandler} type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={enteredDate} onChange={onDateInputChangedHandler} type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm
