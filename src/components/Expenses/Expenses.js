/** @format */

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
  let items = props.items;
  return (
    <Card className="expenses">
      {items.map((element) => {
        return <ExpenseItem date={element.date} title={element.title} price={element.amount} />;
      })}
    </Card>
  );
}

export default Expenses;
