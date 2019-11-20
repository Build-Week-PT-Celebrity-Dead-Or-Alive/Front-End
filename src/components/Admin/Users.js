import React, { useEffect, useState } from 'react';
import { Link  } from 'react-router-dom';
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
        <div key={user.id} className="user-list">
          <Link 
            className='user-update' 
            to={`/protected/users/${user.id}`}>
              Edit
          </Link>
          <div className='user-delete' onClick={(e) => handleDelete(e, user.id)}>Delete</div>
          <div className='users-name'>Name: {user.name}</div>
          <div className='users-pw'>Password: {user.password}</div>
        </div>
      ))}
    </>
  )
}