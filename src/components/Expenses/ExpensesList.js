import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {

    // let showExpenses = <p style={{ color: 'white', textAlign: 'center' }}>No Expense Found</p>

    if (props.filteredExpenses.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }

    return <ul className='expenses-list'>
        {
            props.filteredExpenses.map(expense => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))
        }
    </ul>

}

export default ExpensesList