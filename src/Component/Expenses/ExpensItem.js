import {useState} from "react";
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card"
const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title);
  const price=props.amount;
  const clickHandler=()=>{
    setTitle('updated');
    console.log('clicked');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div class="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
        <button onClick={clickHandler}>add</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
