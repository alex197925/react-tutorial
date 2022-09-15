import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import {useState} from "react";


const Expenses = (props) => {

    const [year, setYear] = useState("2019");


    //Passing selected year with selectedYear parameter
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        // console.log("Expenses.js");
        console.log(selectedYear);
    }

    // Selected all items,
    const filteredExpenses = props.items.filter(expense => {
        //Returning expense date with full year and converting to string
        return expense.date.getFullYear().toString() === year;
    })
    // console.log(filteredExpenses);


    // Conditional Content Output. Check, if expenses not found display "Not item found" message
    let expensesContent = <p>Not item found.</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) =>
                <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    key={expense.id}
                />
        )
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onselectYear={filterChangeHandler}/>
                {expensesContent}
            </Card>
        </div>
    );
}

export default Expenses;