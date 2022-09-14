import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";


const Expenses = (props) => {


    //Passing selected year with selectedYear parameter
    const filterChangeHandler = (selectedYear) => {
        console.log("Expenses.js");
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onselectYear={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    date={props.items[0].date}
                    amount={props.items[0].amount}/>
                <ExpenseItem
                    title={props.items[1].title}
                    date={props.items[1].date}
                    amount={props.items[1].amount}/>
                <ExpenseItem
                    title={props.items[2].title}
                    date={props.items[2].date}
                    amount={props.items[2].amount}/>
                <ExpenseItem
                    title={props.items[3].title}
                    date={props.items[3].date}
                    amount={props.items[3].amount}/>
            </Card>
        </div>

    );
}

export default Expenses;