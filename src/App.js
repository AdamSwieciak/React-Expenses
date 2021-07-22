/** @format */
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [expenses, expensesChange] = useState([
    { id: "e1", title: "Fatfix", amount: 194.23, date: new Date(2021, 2, 28) },
    { id: "e2", title: "Slimesence", amount: 104.23, date: new Date(2021, 6, 28) },
    { id: "e3", title: "menmax", amount: 14.23, date: new Date(2022, 2, 28) },
    { id: "e4", title: "Shop", amount: 24.23, date: new Date(2020, 2, 28) },
  ]);

  const addExpenseHandler = (expense) => {
    expensesChange((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
