import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
 const title=props.title;
 const price=props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div class="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
