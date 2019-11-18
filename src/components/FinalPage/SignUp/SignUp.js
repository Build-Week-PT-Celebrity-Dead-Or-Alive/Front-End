import React, { useState } from 'react';
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';


export default function SignUp(props) {
  const [error, setError] = useState();
  const [signUp, setSignUp]= useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    AxiosWithAuth()
      .post("/register", signUp)
      .then(result => {
        props.history.push("/login")
        console.log("User has registered", result.data)
      })
      .catch(err => {
        setError(err.response)
        // console.log('Error Signup', err)
      })
  }
  return (
    <div>
      <h1>Join Celebrity Dead or Alive!</h1>
        <form onSubmit={handleSubmit}>
          {error && <div>{error}</div>}
          <input 
            type='text'
            name='username'
            placeholder='Username'
            // value and onChange
            value={signUp.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            // value and onChange
            value={signUp.password}
            onChange={handleChange} 
          />

          <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}
