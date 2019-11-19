import React, { useState, useEffect } from "react";
// Instead of importing axios, we'll import AxiosWithAuth, axios can
//   be removed
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';

// Start your new function and export it
function Account(props) {
	// Create initial State with useState
	const [user, setUser] = useState({})

	const [users, setUsers] = useState([])

    // Create a side effect with useEffect
		useEffect(() => {
			// Make that axios call using AxiosWithAuth
			AxiosWithAuth()
				.get("/protected/users")
				.then(result => {
				// set user to an object
				setUsers(result.data)
				// console.log('USER RESULT', result.data)
				})
				.catch(error => {
							console.log(error)
							throw(error)
				})
		}, [])
    
    // Build out the Account Page for Display
		return (
				<>
				{/* want to display account that is logged in with score */}
						<div className="account-wrapper">
							<h1>Score List:</h1>

							{users.map(user => (
									<div key={user.id}className="user">
											<div className="account-row">Username: {user.username}</div>
											<div className="account-row">Score: {user.score}</div>
											{/* trying to sort scores by highest to lowest */}
											{/* <div className='user-score'>Score: {user.score.sort((a, b) => b - a).join(', ')}</div> */}
									</div>
							))}
						</div>
				</>
		)
}

export default Account;