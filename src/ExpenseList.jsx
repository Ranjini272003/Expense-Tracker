import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, dispatch, setEditingExpense }) {

    return (
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expense={expense}
                    dispatch={dispatch}
                    setEditingExpense={setEditingExpense}
                />

            ))}
        </ul>
    );
}

export default ExpenseList;