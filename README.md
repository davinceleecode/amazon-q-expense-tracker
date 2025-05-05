# Simple Expense Tracker

A basic expense tracking application built with React that allows users to add, view, and delete expenses.

## Features

- Add new expenses with description, amount, and date
- View a list of all expenses
- Delete expenses
- See the total amount of all expenses

## Project Structure

- `App.jsx` - Main application component
- `ExpenseTracker.jsx` - Core expense tracker functionality
- `styles.css` - Styling for the application

## How to Use

1. Clone or download this repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open your browser to the local development server (typically [http://localhost:5173](http://localhost:5173)).

## Implementation Details

This expense tracker uses React's useState hook to manage the list of expenses. The data is stored in memory as an array of objects, with each object representing an expense with the following properties:

- `id`: Unique identifier for the expense
- `description`: What the expense was for
- `amount`: How much was spent
- `date`: When the expense occurred

No backend or persistent storage is used in this simple implementation.
