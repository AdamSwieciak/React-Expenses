/** @format */
import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [openExpensesForm, setopenExpensesForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setopenExpensesForm(false);
  };

  const closeNewExpenses = () => {
    setopenExpensesForm(!openExpensesForm);
  };

  return (
    <div className="new-expense">
      {openExpensesForm ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} close={closeNewExpenses} />
      ) : (
        <button onClick={() => closeNewExpenses()}>Add New Expenses</button>
      )}
    </div>
  );
};

export default NewExpense;
