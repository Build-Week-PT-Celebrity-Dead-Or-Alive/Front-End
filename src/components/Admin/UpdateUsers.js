import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function UpdateUsers(props) {
  const [user, setUser] = useState({
    name: '',
    password: '',
    id: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get(`/protected/users/${props.match.params.id}`)
      .then(result => {
        console.log('UPDATE', result.data)
        // setUser(result.data)
      })
      .catch(error => {
        console.log('UPDATE ERROR', error)
      })
  }, [props.match.params.id])

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    AxiosWithAuth()
      .put(`/protected/users/${user.id}`, user)
      .then(result => {
        props.history.push('/protected/users')
        console.log('UPDATE USER', result.data)
      })
      .catch(error => {
        console.log('UPDATE USER ERROR', error)
      })
  }

  return (
    <>
      <h1>Update User</h1>

      <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            name='name' 
            placeholder='Name' 
            value={user.name}
            onChange={handleChange} 
          />
          <input 
            type='text' 
            name='password' 
            placeholder='Password' 
            value={user.password}
            onChange={handleChange} 
          />

          <button type='submit'>Save</button>
      </form>
    </>
  )
}