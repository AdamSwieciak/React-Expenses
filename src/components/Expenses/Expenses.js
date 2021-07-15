/** @format */
import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
const [filteredYear, setsfilteredYear] = useState("2020");

  let items = props.items;

  const FilterDate = (data) => {
    setsfilteredYear(data)
  };

  let filteredArray = items.filter( element => {
    return element.date.getFullYear()===parseInt(filteredYear)
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onfilterDate={FilterDate} />
      {filteredArray.length === 0 && <p>No expenses found. </p> }
      {filteredArray.length > 0 && filteredArray.map((element) => (
            <ExpenseItem
              date={element.date}
              title={element.title}
              price={element.amount}
              key={element.id}
            />
          ))
      }

    </Card>
  );
};

export default Expenses;
