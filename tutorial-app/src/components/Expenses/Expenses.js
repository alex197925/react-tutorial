
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import {useState} from "react";
import expensesList from "./ExpensesList";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {

    const [year, setYear] = useState("2019");


    //Passing selected year with selectedYear parameter
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        // console.log("Expenses.js");
        // console.log(selectedYear);
    }

    // Selected all items,
    const filteredExpenses = props.items.filter(expense => {
        //Returning expense date with full year and converting to string
        return expense.date.getFullYear().toString() === year;
    })
    // console.log(filteredExpenses);



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={year}
                    onselectYear={filterChangeHandler}/>
               <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;