import React, { useState } from 'react'

function SignUp (props) {
  const [name, setName] = useState('')
  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input type='text' value={name} onChange={handleChangeName} />
      </label>
      <button type='submit'>send</button>
    </form>
  )
}

export default SignUp
