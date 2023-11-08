import React from 'react'

interface Expense {
	id: number
	decription: string
	amount: number
	category: string
}

interface Props {
	expenses: Expense[]
	onDelete: (id: number) => void //call back fucntion beacause the list of expenses is passed here via props, it's maintained somewhere else inside the parent component. The component that holds some state should be the one obtainning it. So when the user click takt delete button, we dont want to delete an expense here. Instead, we notify the parent or the consumer off this component that an expense should be deleted ( w oosniesieniu do button 'Delete')

	//call back fucntion, ponieważ lista wydatków jest przekazywana tutaj za pośrednictwem rekwizytów, jest utrzymywana gdzieś indziej wewnątrz komponentu nadrzędnego. Komponent, który przechowuje jakiś stan, powinien być tym, który go uzyskuje. Więc kiedy użytkownik kliknie przycisk usuwania, nie chcemy usuwać wydatku tutaj. Zamiast tego powiadamiamy rodzica lub konsumenta tego komponentu, że wydatek powinien zostać usunięty (w oosniesieniu do przycisku "Usuń").
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(expenses.length ===0) return null;
	return (
		<table className='table table-bordered table-striped-columns bg-info-subtle table-dark '>
			<thead>
				<tr>
					<th>Opis</th>
					<th>Ilość</th>
					<th>Kategoria</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{expenses.map(expense => (
					<tr key={expense.id}>
						<td>{expense.decription}</td>
						<td>{expense.amount}</td>
						<td>{expense.category}</td>
						<td>
							<button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((acc, expense)=> expense.amount + acc, 0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
		</table>
	)
}

export default ExpenseList
