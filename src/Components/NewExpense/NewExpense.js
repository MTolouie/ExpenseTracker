import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"
function NewExpense(props){
    
    function onSaveExpenseData(expenseData){
        const expenseDataWithId = {
            ...expenseData,
            id:Math.random().toString()
        }

        props.onModifyExpenseData(expenseDataWithId);
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
        </div>
    )
}

export default NewExpense