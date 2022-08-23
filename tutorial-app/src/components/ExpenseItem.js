import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item ">
           <div>March 29th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price"> $ 298.76</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
