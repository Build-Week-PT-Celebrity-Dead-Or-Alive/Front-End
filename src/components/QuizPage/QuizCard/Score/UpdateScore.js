import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../../../Utilities/AxiosWithAuth';

export default function UpdateScore(props) {
  console.log('UPDATE PROPS', props)
  const [userScore, updateUserScore] = useState({
    id: '',
    username: '',
    score: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get(`/protected/users/${props.match.params.id}`)
      .then(result => {
        updateUserScore({
          username: result.data.username,
          score: result.data.score
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
  }, [props.match.params.id])

  const handleChange = e => {
    updateUserScore({
      ...userScore,
      [e.target.name]: e.target.value 
    })
  }

  const handleUpdate = e => {
    e.preventDefault()

    AxiosWithAuth()
      .put(`/protected/users/${userScore.id}`, userScore)
      .then(result => {
        props.history.push('/protected/users')
        console.log('Score was updated!')
        // updateUserScore(userScore.filter(user => user.id !== id))
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  return (
    <>
      <p>Update score</p>
      <form onSubmit={handleUpdate}>
        <p>{userScore.username}</p>
        <input
          type='number'
          name='update score'
          placeholder='Update Score'
          value={userScore.score} 
          onChange={handleChange}
        />
        <button 
          className='update-score'
          type='submit'>
            Update
        </button>
      </form>
  </>
  )
}