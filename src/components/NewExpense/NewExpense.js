import React, { useState } from "react"

import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false)

    const formToggle = () => {
        setShowForm(f => !f)
    }

    const saveExpenseDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.addExpenseHandler(data)
    }

    return (
        <div className="new-expense">
            {!showForm && <button onClick={formToggle}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={formToggle} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense