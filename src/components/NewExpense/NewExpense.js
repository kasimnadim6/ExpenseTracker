import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSaveNewExpense }) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const addNewExpenseHandler = (exp) => {
    const expense = {
      ...exp,
      id: Math.floor(Math.random() * 100 + 1),
    };
    onSaveNewExpense(expense);
    formVisibilityHandler();
  };
  const formVisibilityHandler = () => {
    setFormVisibility((prevState) => !prevState);
  };
  return (
    <div className="new-expense">
      {!formVisibility && (
        <button type="button" onClick={formVisibilityHandler}>
          Add New Expense
        </button>
      )}
      {formVisibility && (
        <ExpenseForm
          onSaveNewExpense={addNewExpenseHandler}
          onCancel={formVisibilityHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
