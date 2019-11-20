import React, { useEffect, useState } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function Admin(props) {
  const [users, setUsers] = useState({
    name: '',
    password: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get('/protected/users')
      .then(result => {
        // setUsers()
        console.log('ADMIN RESULTS', result.data)
      })
      .catch(error => {
        console.log('USER ERROR', error)
      })
  }, [])

  return (
    <>
    <h1>Admin Page:</h1>

      <div className="user-name">Name: {users.name}</div>
      <div className="user-pw">Password: {users.password}</div>
    </>
  )
}