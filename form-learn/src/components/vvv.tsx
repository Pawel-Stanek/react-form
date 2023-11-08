import React, { FormEvent, useRef } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
const schema = z.object({
	category: z.string().min(3),
	amount: z.number().min(1),
})

type FormData = z.infer<typeof schema>

const form = () => {
    const descriptionRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
        if (descriptionRef.current !== null)
		console.log(descriptionRef.current.value);
        if (amountRef.current !== null)
		console.log(amountRef.current.value);
        if (categoryRef.current !== null)
		console.log(categoryRef.current.value);
	}
3
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-table m-3 '>
				<label htmlFor='description' className='form-label'>
					Opis
				</label>
				<input ref={descriptionRef} id='description' type='text' className='form-control' />
			</div>
			<div className='form-table m-3  '>
				<label htmlFor='amount' className='form-label'>
					Ilość
				</label>
				<input ref={amountRef} id='amount' type='number' className='form-control' />
			</div>

			<div className='form-table m-3  '>
				<label htmlFor='category' className='form-label'>
					Kategorie
				</label>
				<select ref={categoryRef} id='category' className='form-select mb-3' aria-label='example'>
					<option selected disabled>
						Wybierz kategorię
					</option>
					<option value='1'>One</option>
					<option value='2'>Two</option>
					<option value='3'>Three</option>
				</select>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	)
}

export default form