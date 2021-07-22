import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const EpensesList = props => {

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">No expenses found. </h2>;
    }

    return (<ul className="expenses-list">
      {
        props.items.map((element) => (
        <ExpenseItem
          date={element.date}
          title={element.title}
          price={element.amount}
          key={element.id}
        />
      ))
      }
    </ul>)
};

export default EpensesList;