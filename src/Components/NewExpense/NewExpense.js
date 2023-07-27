import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isFormAvailable, setIsFormAvailable] = useState(false);

  let formContent = (
    <div>
      <button onClick={onAddNewExpenseBtnClicked} >Add New Expense</button>
    </div>
  );

  function onSaveExpenseData(expenseData) {
    const expenseDataWithId = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onModifyExpenseData(expenseDataWithId);
    setIsFormAvailable(false);
  }

  function onAddNewExpenseBtnClicked(event) {
    setIsFormAvailable(true);
  }

  function onCancelBtnClicked(event) {
    setIsFormAvailable(false);
  }

  if (isFormAvailable) {
    formContent = <ExpenseForm onCancelBtnClicked={onCancelBtnClicked} onSaveExpenseData={onSaveExpenseData} />;
  }

  return <div className="new-expense">{formContent}</div>;
}

export default NewExpense;
