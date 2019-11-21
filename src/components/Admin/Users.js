import React, { useEffect, useState } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function Users(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    AxiosWithAuth()
      .get('/protected/users')
      .then(result => {
        console.log('USERS RESULT', result)
        setUsers(result.data)
      })
      .catch(error => {
        console.log('Users Error', error)
      })
  }, [])

  const handleDelete = (e, id) => {
    e.preventDefault()

    if(window.confirm('Are you sure you want to delete this user?')) {

      AxiosWithAuth()
      .delete(`/protected/users/${id}`)
      .then(result => {
        console.log('User was deleted!')
        setUsers(users.filter(user => user.id !== id))
      })
      .catch(error => {
        console.log('DELETE ERROR', error)
      })
    }
  }

  return (
    <>
      <h1>Users:</h1>

      {users.map(user => (
        <div 
          key={user.id} 
          className="user-list">
          <button 
            className='user-delete' 
            onClick={(e) => handleDelete(e, user.id)}>
              Delete
          </button>
          <div className='users-name'>Name: {user.username}</div>
          <div className='users-pw'>Password: {user.password}</div>
        </div>
      ))}
    </>
  )
}