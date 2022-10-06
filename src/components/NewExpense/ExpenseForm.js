import React, { useState } from "react"

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [form, setForm] = useState({ title: '', amount: '', date: '' })

    const formChangeHandler = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        setForm(f => (
            {
                ...f, [fieldName]: fieldValue
            }
        ))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            title: form.title,
            amount: +form.amount,
            date: new Date(form.date)
        }
        props.onSaveExpenseData(data)
        setForm({ title: '', amount: '', date: '' })
        props.onCancel()
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={form.title} name='title' onChange={formChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={form.amount} name='amount' min="0.01" step="0.01" onChange={formChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={form.date} name='date' min="2019-01-01" max="2022-12-31" onChange={formChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={submitHandler}>Add Expense</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm