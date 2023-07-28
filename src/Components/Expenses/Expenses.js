import React , {useState} from 'react'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
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
       <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList expenses={filteredExpenses}/>
       
      </Card>
    </div>
  );
}

export default Expenses;
