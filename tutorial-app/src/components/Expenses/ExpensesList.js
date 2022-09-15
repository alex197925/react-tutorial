import React from 'react';
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    // Conditional Content Output. Check, if expenses not found display "Not item found" message
  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Not item found</h2>
  }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    key={expense.id}
                />)
            };
        < /ul>
    )
}

export default ExpensesList;