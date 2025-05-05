import React, { useReducer, useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import FilterBar from "./FilterBar";
import TotalDisplay from "./TotalDisplay";
import { useLocalStorage } from "./useLocalStorage";

const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, { ...action.payload }];
        case "DELETE_EXPENSE":
            return state.filter((expense) => expense.id !== action.payload);
        case "EDIT_EXPENSE":
            return state.map((expense) =>
                expense.id === action.payload.id ? action.payload : expense
            );
        default:
            return state;
    }
};

function ExpenseTracker() {
    const [storedExpenses, setStoredExpenses] = useLocalStorage('expenses', []);
    const [expenses, dispatch] = useReducer(expenseReducer, storedExpenses);
    const [filterCategory, setFilterCategory] = useState("");
    const [editingExpense, setEditingExpense] = useState(null);


    useEffect(() => {
        setStoredExpenses(expenses);
    }, [expenses, setStoredExpenses]);

    const filteredExpenses = filterCategory
        ? expenses.filter(exp => exp.category === filterCategory)
        : expenses;

    return (
        <div>
            <h1>Expense Tracker💸</h1>
            <ExpenseForm
                dispatch={dispatch}
                editingExpense={editingExpense}
                setEditingExpense={setEditingExpense}
            />
            <FilterBar setFilterCategory={setFilterCategory} />
            <TotalDisplay expenses={filteredExpenses} />
            <ExpenseList
                expenses={filteredExpenses}
                dispatch={dispatch}
                setEditingExpense={setEditingExpense}
            />

        </div>
    );
}

export default ExpenseTracker;