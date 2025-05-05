import React from "react";

function ExpenseItem({ expense, dispatch, setEditingExpense }) {
    return (
        <li>
            <div>
                {expense.title} - ${expense.amount} [{expense.category}]
            </div>
            <div>
                <button
                    className="edit"
                    onClick={() => setEditingExpense(expense)}
                >🖋️</button>
                <button className="trash" onClick={() => dispatch({ type: "DELETE_EXPENSE", payload: expense.id })}>
                    🚮
                </button>
            </div>

        </li>
    );
}

export default ExpenseItem;