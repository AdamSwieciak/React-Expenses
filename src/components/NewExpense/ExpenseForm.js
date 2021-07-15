/** @format */
import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formInput, formInputChange] = useState({
    title: "",
    amount: "",
    date: "",
  });

  // const titleChangeHandler = (event) => {
  //  console.log(event.target.value)

  // }

  const submitChandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: formInput.title,
      amount: formInput.amount,
      date: new Date(formInput.date)
    }

    props.onSaveExpenseData(expenseData);
    formInputChange({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitChandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formInput.title}
            onChange={(event) =>
              formInputChange((prevState) => {
                return {
                  ...prevState,
                  title: event.target.value,
                };
              })
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formInput.amount}
            onChange={(event) =>
              formInputChange((prevState) => {
                return {
                  ...prevState,
                  amount: event.target.value,
                };
              })
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={formInput.date}
            onChange={(event) =>
              formInputChange((prevState) => {
                return {
                  ...prevState,
                  date: event.target.value,
                };
              })
            }
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
