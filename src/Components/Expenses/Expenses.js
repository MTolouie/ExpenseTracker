import React , {useState} from 'react'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  
  const [year,setYear] = useState('2020');

  function onSelectYearChangedHandler(value){
    setYear(value);
    console.log(value)
  }
  
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selectedYear={year} onSelectYearChangedHandler={onSelectYearChangedHandler}/>
       
       {
       props.expenses.map(expense =>  <ExpenseItem expense={expense} />)
       }
       
      </Card>
    </div>
  );
}

export default Expenses;
