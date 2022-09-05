import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date(2022, 8, 23);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 298.76;
    return (
        <div className="expense-item ">
           <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price"> $ {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
