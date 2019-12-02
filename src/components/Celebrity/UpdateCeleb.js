import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function UpdateCeleb(props) {
  // console.log('CELEB PROPS', props)
  const [celeb, setCeleb] = useState({
    dead: '',
    id: ''
  })

  useEffect(() => {
    AxiosWithAuth()
      .get(`/celebs/${props.match.params.id}`)
      .then(result => {
        setCeleb({
          name: result.data.name,
          dead: result.data.dead
        })
      })
      .catch(error => {
        console.log('Error', error)
      })
  }, [props.match.params.id])

  const handleChange = (event) => {
    setCeleb({
      ...celeb,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    AxiosWithAuth()
      .put(`/celebs/${celeb.id}`, celeb)
      .then(result => {
        props.history.push('/celebs')
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  return (
    <>
      <h1>Update Celebrity</h1>

        <form onSubmit={handleSubmit}>
          <p>Name: {celeb.name}</p>
          <input 
            type='text'
            name='dead'
            placeholder='Dead?'
            value={celeb.dead}
            onChange={handleChange}
          />

          <button type='submit'>Save</button>
        </form>
    </>
  )
}

