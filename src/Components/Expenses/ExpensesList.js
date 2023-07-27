import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem"
function ExpensesList(props){
    
  
    if(props.expenses.length === 0){
      return (
        <h2 className="expenses-list__fallback">No Expense Item Found</h2>
      ); 
    }

    return (
        <ul className="expenses-list">
        {props.expenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
        </ul>
    );
}

export default ExpensesList