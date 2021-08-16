import { useState } from 'react';
import './ExpenseForm.css';

const NewExpenseForm = ({ onSaveNewExpense, onCancel }) => {
  const [newExpense, setNewExpense] = useState({
    title: '',
    date: '',
    price: '',
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setNewExpense((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const addExpenseHandler = (e) => {
    e.preventDefault();
    const expense = {
      title: newExpense.title,
      price: newExpense.price,
      date: newExpense.date ? new Date(newExpense.date) : '',
    };
    setNewExpense({ title: '', price: '', date: '' });
    onSaveNewExpense(expense);
  };
  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={newExpense.title}
            type="text"
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="price"
            value={newExpense.price}
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            value={newExpense.date}
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
