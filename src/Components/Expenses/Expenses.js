import React , {useState} from 'react'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  
  const [year,setYear] = useState('2020');

  function onSelectYearChangedHandler(value){
    setYear(value);
  }

  const filteredExpenses = props.expenses.filter( (expense) => {
   return expense.date.getFullYear().toString() === year.toString()
  });
  
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={year} onSelectYearChangedHandler={onSelectYearChangedHandler}/>
       
       {
       filteredExpenses.map(expense =>  <ExpenseItem expense={expense} key={expense.id} />)
       }
       
      </Card>
    </div>
  );
}

export default Expenses;
