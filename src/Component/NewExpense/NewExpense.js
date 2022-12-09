import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseDate)=>{
        const expenseData={
            ...enteredExpenseDate,
            id:Math.random().toString()
        }
        console.log(expenseData);
        props.onClickData(expenseData);


    }



    return(
     <div className='new-expense'>
         <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>
     </div>
    );
}
export default NewExpense;