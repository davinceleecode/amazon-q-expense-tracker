import React, { useState } from "react";

const ExpenseTracker = () => {
  // State to store expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Groceries", amount: 50.75, date: "2025-05-01" },
    { id: 2, description: "Internet Bill", amount: 60.0, date: "2025-04-28" },
    { id: 3, description: "Gas", amount: 40.25, date: "2025-04-25" },
  ]);

  // State for form inputs
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Generate a unique ID for new expenses
  const generateId = () => {
    return expenses.length > 0
      ? Math.max(...expenses.map((expense) => expense.id)) + 1
      : 1;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!description || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }

    // Create new expense object
    const newExpense = {
      id: generateId(),
      description,
      amount: parseFloat(amount),
      date,
    };

    // Add new expense to the list
    setExpenses([...expenses, newExpense]);

    // Clear form inputs
    setDescription("");
    setAmount("");
    setDate("");
  };

  // Delete an expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="expense-tracker">
      <h1>Simple Expense Tracker</h1>

      {/* Form to add new expenses */}
      <div className="expense-form">
        <h2>Add New Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What did you spend on?"
            />
          </div>

          <div className="form-group">
            <label>Amount ($):</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.01"
              placeholder="0.00"
            />
          </div>

          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button type="submit">Add Expense</button>
        </form>
      </div>

      {/* Display expenses */}
      <div className="expense-list">
        <h2>Expense List</h2>
        <div className="total">
          <strong>Total: ${totalExpenses.toFixed(2)}</strong>
        </div>

        {expenses.length === 0 ? (
          <p>No expenses recorded yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>${expense.amount.toFixed(2)}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button onClick={() => deleteExpense(expense.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ExpenseTracker;
