import React, { useEffect, useState } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function Admin(props) {
  const [users, setUsers] = useState({
   username: '',
    password: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get('/protected/users')
      .then(result => {
        setUsers({
          username: result.data.username,
          password: result.data.password
        })
        console.log('ADMIN RESULTS', result.data)
      })
      .catch(error => {
        console.log('USER ERROR', error)
      })
  }, [])

  return (
    <>
    <h1>Admin Page:</h1>

      <div className="user-name">Name: {users.username}</div>
      <div className="user-pw">Password: {users.password}</div>
    </>
  )
}