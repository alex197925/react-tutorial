import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";


const NewExpense = (props) => {


    const [showForm, setShowForm] = useState(false);

// Show form when you click button "Add new expenses
    const showFormHandler = () => {
        setShowForm(true);
    }

    const stopEditingHandler = () => {
        setShowForm(false);
    }


    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }


    return (
        <div className="new-expense">
            {/*Showing button and not form*/}
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {/*Showing form and not button*/}
            {showForm && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
        </div>
    );
};

export default NewExpense;