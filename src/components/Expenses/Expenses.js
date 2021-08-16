import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  let filteredExpenses = [];
  const [selectedYear, setFilteredYear] = useState('all');
  const expenseFilterHandler = (filterValue) => {
    setFilteredYear(filterValue);
  };
  if (selectedYear === 'all') {
    filteredExpenses = expenses;
  } else {
    filteredExpenses = expenses.filter(
      (e) => e.date.getFullYear().toString() === selectedYear
    );
  }
  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onFilterExpense={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 && (
          <p className="expenses-list__fallback">No Expenses Found</p>
        )}
        <ul className="expenses-list">
          {filteredExpenses.length > 0 &&
            filteredExpenses.map((e) => (
              <ExpenseItem
                key={e.id}
                date={e.date}
                title={e.title}
                price={e.price}
              />
            ))}
        </ul>
      </Card>
    </li>
  );
};

export default Expenses;
