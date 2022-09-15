import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


   // Handling selected year
   const dropDownChangeHandler = (event) => {
       props.onselectYear(event.target.value)
       // console.log(event.target.value);
   }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                {/*Add onChange to check value of selected year and pass selected props*/}
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;