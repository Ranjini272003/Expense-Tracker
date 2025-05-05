import React from "react";

function FilterBar({ setFilterCategory }) {
    return (
        <div className="filter">
            <select onChange={(e) => setFilterCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Health">Health</option>
                <option value="Other">Other</option>
            </select>
        </div>
    );
}

export default FilterBar;