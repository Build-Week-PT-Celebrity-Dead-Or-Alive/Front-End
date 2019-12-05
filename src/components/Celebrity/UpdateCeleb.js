import React, { useState, useEffect, useContext } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';
import { UpdateCelebContext } from '../../context/UpdateCelebContext';


export default function UpdateCeleb(props) {
  const [celeb, setCeleb] = useState({
    dead: '',
    id: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get(`/celebs/${props.match.params.id}`)
      .then(result => {
        setCeleb(result.data)
      })
      .catch(error => {
        console.log('Error', error.response)
      })
  }, [props.match.params.id])

  const handleChange = (event) => {
    setCeleb({
      ...celeb,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    AxiosWithAuth()
      .put(`/protected/celebs/${celeb.id}`, celeb)
      .then(result => {
        console.log('UPDATE CELEB', result.data)
        props.history.push('/celebs')
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  return (
    <>
      <h1>Update Celebrity</h1>

        <form onSubmit={handleUpdateSubmit}>
          <p>Name: {celeb.name}</p>
          <input 
            type='text'
            name='dead'
            value={celeb.dead}
            onChange={handleUpdateChange}
          />

          <button type='submit'>Update</button>
        </form>
    </>
  )
}

