import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../../Utilities/AxiosWithAuth';

export default function UpdateCeleb(props) {
  console.log('CELEB PROPS', props)
  const [userScore, updateUserScore] = useState(0)

  useEffect(() => {
    AxiosWithAuth()
      .get(`/users/${props.match.params.id}`)
      .then(result => {
        setUserScore(result.data)
      })
      .catch(error => {
        console.log('Error', error)
      })
  }, [props.match.params.id])


  const handleSubmit = (event) => {
    event.preventDefault()

    AxiosWithAuth()
      .put(`/users/${userScore.id}`, userScore)
      .then(result => {
        props.history.push('/score')
      })
      .catch(error => {
        console.log('Error', error)
      })
  }

  return (
    <>
    </>
  )
}