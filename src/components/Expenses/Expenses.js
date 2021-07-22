/** @format */
import { useState } from "react";

import EpensesList from "./ExpensesList";
import ExpensesChar from "./ExpensesChar";
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
        <ExpensesChar expenses={filteredArray} />
        <EpensesList items={filteredArray} />
      </Card>
    );
};

export default Expenses;
