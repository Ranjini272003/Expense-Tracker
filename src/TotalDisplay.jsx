import React from "react";

function TotalDisplay({ expenses }) {
    const total = expenses.reduce((acc, item) => acc + item.amount, 0);
    return <h2>Total Spending: ₹{total.toFixed(2)}</h2>;
}

export default TotalDisplay;
