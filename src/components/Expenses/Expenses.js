import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022')

    const filterChangeHandler = (yyyy) => {
        setFilteredYear(yyyy)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return filteredYear === expense.date.getFullYear().toString()
    })

    
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {<ExpensesList filteredExpenses={filteredExpenses}/>}
            </Card>
        </div>
    )
}

export default Expenses