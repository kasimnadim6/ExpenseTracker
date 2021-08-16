import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, price }) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__date">
        <div className="expense-item__month">
          {date && date.toLocaleString('en-US', { month: 'long' })}
        </div>
        <div className="expense-item__year">{date && date.getFullYear()}</div>
        <div className="expense-item__day">
          {date && date.toLocaleString('en-US', { day: '2-digit' })}
        </div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
