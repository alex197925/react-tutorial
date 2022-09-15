import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2021, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2022, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2022, 5, 12),
    },
];


const App = () => {
    //Add expenses to the state
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    // Add item to the list
    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
        // console.log('In App.js');
        // console.log(expense);
    }
    return (
        <div className="app">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );
}


export default App;
