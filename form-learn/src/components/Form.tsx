// import React, { FormEvent, useRef } from 'react'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// const schema = z.object({
// 	category: z.string().min(3),
// 	amount: z.number().min(1),
// })

// type FormData = z.infer<typeof schema>

// const form = () => {
//     const descriptionRef = useRef<HTMLInputElement>(null);
//     const amountRef = useRef<HTMLInputElement>(null);
//     const categoryRef = useRef<HTMLSelectElement>(null);

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault();
//         if (descriptionRef.current !== null)
// 		console.log(descriptionRef.current.value);
//         if (amountRef.current !== null)
// 		console.log(amountRef.current.value);
//         if (categoryRef.current !== null)
// 		console.log(categoryRef.current.value);
// 	}
// 3
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div className='form-table m-3 '>
// 				<label htmlFor='description' className='form-label'>
// 					Opis
// 				</label>
// 				<input ref={descriptionRef} id='description' type='text' className='form-control' />
// 			</div>
// 			<div className='form-table m-3  '>
// 				<label htmlFor='amount' className='form-label'>
// 					Ilość
// 				</label>
// 				<input ref={amountRef} id='amount' type='number' className='form-control' />
// 			</div>

// 			<div className='form-table m-3  '>
// 				<label htmlFor='category' className='form-label'>
// 					Kategorie
// 				</label>
// 				<select ref={categoryRef} id='category' className='form-select mb-3' aria-label='example'>
// 					<option selected disabled>
// 						Wybierz kategorię
// 					</option>
// 					<option value='1'>One</option>
// 					<option value='2'>Two</option>
// 					<option value='3'>Three</option>
// 				</select>
// 			</div>
// 			<button type='submit' className='btn btn-primary'>
// 				Submit
// 			</button>
// 		</form>
// 	)
// }

// export default form
import React, { FormEvent } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Deklaracja schematu z walidacją za pomocą Zod
const schema = z.object({
  description: z.string().min(3), // Pole 'description' musi zawierać co najmniej 3 znaki.
  amount: z.number().min(1), // Pole 'amount' musi być liczbą większą niż 0.
  category: z.string().refine(value => value !== '', {
    message: 'Proszę wybrać kategorię.',
  }),
});

type FormData = z.infer<typeof schema>;

const MyForm = () => {
  // Użycie useForm z zodResolver do obsługi formularza i jego walidacji
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="form-table m-3">
        <label htmlFor="description" className="form-label">
          Opis
        </label>
        <input
          {...register('description')} // Rejestracja pola 'description' w hooku useForm
          id="description"
          type="text"
          className={`form-control ${errors.description ? 'is-invalid' : ''}`}
        />
        {errors.description && (
          <div className="invalid-feedback">Opis musi zawierać co najmniej 3 znaki.</div>
        )}
      </div>
      <div className="form-table m-3">
        <label htmlFor="amount" className="form-label">
          Ilość
        </label>
        <input
          {...register('amount')} // Rejestracja pola 'amount' w hooku useForm
          id="amount"
          type="number"
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
        />
        {errors.amount && <div className="invalid-feedback">Ilość musi być liczbą większą niż 0.</div>}
      </div>
      <div className="form-table m-3">
        <label htmlFor="category" className="form-label">
          Kategorie
        </label>
        <select
          {...register('category')} // Rejestracja pola 'category' w hooku useForm
          id="category"
          className={`form-select mb-3 ${errors.category ? 'is-invalid' : ''}`}
          aria-label="example"
        >
          <option value="" disabled>
            Wybierz kategorię
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {errors.category && <div className="invalid-feedback">Proszę wybrać kategorię.</div>}
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
};

export default MyForm;