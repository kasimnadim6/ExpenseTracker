import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const InitialExpenses = [
    {
      id: 1,
      title: 'Car Insurance',
      date: new Date(2018, 7, 13),
      price: 256.5,
    },
    {
      id: 2,
      title: 'Bike Insurance',
      date: new Date(2020, 3, 16),
      price: 156,
    },
    {
      id: 3,
      title: 'Independence Expense',
      date: new Date(2021, 5, 15),
      price: 300,
    },
  ];
  const [expenses, setExpense] = useState(InitialExpenses);

  const addNewExpenseHandler = (exp) => {
    setExpense((prevState) => {
      return [...prevState, exp];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
