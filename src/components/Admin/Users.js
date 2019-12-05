import React, { useContext } from 'react';

// context
import { UserContext } from '../../context/UserContext';

export default function Users() {
  const {users, handleUserDelete} = useContext(UserContext)

  return (
    <>
      <h1>Users:</h1>

      {users.map(user => (
        <div 
          key={user.id} 
          className="user-list">
          <div className='users-name'>Name: {user.username}</div>
          <div className='users-score'>Score: {user.score}</div>
          <button 
            className='user-delete' 
            onClick={(e) => handleUserDelete(e, user.id)}>
              Delete
          </button>
        </div>
      ))}
    </>
  )
}