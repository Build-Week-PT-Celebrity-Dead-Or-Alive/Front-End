import React, { useState, useEffect } from "react";
// Instead of importing axios, we'll import AxiosWithAuth, axios can
//   be removed
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';

// Start your new function and export it
function Account(props) {
	// Create initial State with useState
	const [user, setUser] = useState({
		username: "",
		email: "",
	})

    // Create a side effect with useEffect
	useEffect(() => {
		// Make that axios call using AxiosWithAuth
        AxiosWithAuth()
            .get("/users/:id")
			.then(result => {
				// set user to an object
				setUser({
					username: result.data.username,
				})
			})
			.catch(error => {
                console.log(error)
                throw(error)
			})
	}, [])
    
    // Build out the Account Page for Display
	return (
		<div className="account-wrapper">
            <div className="user">
			    <h1>My Quiz Account</h1>

                <div className="account-row">Username: {user.username}</div>
            </div>
        </div>
        )
    }

export default Account;