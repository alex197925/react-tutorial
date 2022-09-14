import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";
import {useState} from "react";


const Expenses = (props) => {

    const [year, setYear] = useState("2020");


    //Passing selected year with selectedYear parameter
    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear);
        // console.log("Expenses.js");
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={year} onselectYear={filterChangeHandler}/>
                {/*Map through all items-expenses and create ExpensesItem component*/}
                {props.items.map((expense) => <ExpenseItem title={expense.title} date={expense.date}
                                                           amount={expense.amount} key={expense.id}/>)}

            </Card>
        </div>

    );
}

export default Expenses;