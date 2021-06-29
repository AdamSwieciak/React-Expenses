/** @format */

import Expenses from "./components/Expenses/Expenses";

const App = () => {
   const expense = [
     { title: "Fatfix", amount: 194.23, date: new Date(2021, 2, 28) },
     { title: "Slimesence", amount: 104.23, date: new Date(2021, 6, 28) },
     { title: "menmax", amount: 14.23, date: new Date(2020, 2, 28) },
     { title: "Shop", amount: 24.23, date: new Date(2020, 2, 28) },
   ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>cos tam</p>
      <Expenses items={expense} />
    </div>
  );
}

export default App;
