import React, { useState } from 'react'
import Form from './components/Form'
import ExpenseList from './components/ExpenseList'
const App = () => {
	const [expenses, setExpenses] = useState([
		{ id: 1, decription: 'aaa', amount: 10, category: 'Utilities' },
		{ id: 2, decription: 'bbb', amount: 10, category: 'Utilities' },
		{ id: 3, decription: 'ccc', amount: 10, category: 'Utilities' },
		{ id: 4, decription: 'ddd', amount: 10, category: 'Utilities' },
	])

	return (
		<div>
			<Form />
			<ExpenseList expenses={expenses} onDelete={id => setExpenses(expenses.filter(e => e.id !== id))} />
		</div>
	)
}

export default App
