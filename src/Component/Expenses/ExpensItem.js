import {useState} from "react";
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card"
const ExpenseItem = (props) => {
  // eslint-disable-next-line 
  const [title,setTitle]=useState(props.title);
  const price=props.amount;
 

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div class="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
