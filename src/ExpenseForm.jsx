import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ExpenseForm({ dispatch, editingExpense, setEditingExpense }) {
    const [form, setForm] = useState({ title: "", amount: "", category: "Food" });

    useEffect(() => {
        if (editingExpense) {
            setForm({
                title: editingExpense.title,
                amount: editingExpense.amount,
                category: editingExpense.category,
            });
        }
    }, [editingExpense]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.amount) return;

        if (editingExpense) {
            dispatch({
                type: "EDIT_EXPENSE",
                payload: {
                    ...editingExpense,
                    ...form,
                    amount: parseFloat(form.amount),
                },
            });
            setEditingExpense(null);
        } else {
            dispatch({
                type: "ADD_EXPENSE",
                payload: {
                    id: uuidv4(),
                    ...form,
                    amount: parseFloat(form.amount),
                },
            });
        }

        setForm({ title: "", amount: "", category: "Food" });
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                required
            />
            <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
                <option>Food</option>
                <option>Travel</option>
                <option>Shopping</option>
                <option>Health</option>
                <option>Other</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseForm;