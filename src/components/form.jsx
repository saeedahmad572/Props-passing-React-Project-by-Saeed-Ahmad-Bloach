import React from 'react'

export default function Form() {
  return (
    <div>
        
        <form className='form'>
      <label htmlFor="name">First Name</label>
      <input type="text" className='forminput' /><br />

      <label htmlFor="name">Last Name</label>
      <input type="text" className='forminput'/><br />

      <label htmlFor="name">Email</label>
      <input type="Email" className='forminput'/><br />

      </form>

    </div>
  )
}
