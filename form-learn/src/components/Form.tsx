import React from 'react'

const form = () => {
  return (
    <form>
    <div className='mb-3'>
        <label htmlFor='name' className='form-label'>Name</label>
        <input id='name' type='text' className='form-control' />
    </div>
    <div className='mb-3'>
        <label htmlFor='age' className='form-label'>Age</label>
        <input id='age' type='number' className='form-control' />
    </div>
</form>
  )
}

export default form