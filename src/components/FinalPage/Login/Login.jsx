import React, {useState} from "react";
// Instead of importing axios, we'll import AxiosWithAuth, axios can be removed
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';

function Login(props) {
    // Set up error state for error component/message
    const [error, setError] = useState()

    // Set up some initial state
    const [data, setData] = useState({
        username: "",
        password: "",
    })

    // Create handleChange function for the inputs
    const handleChange = (event) => {
        // set new state
        setData({
            // make object IMMUTABLE by spreading the data
            ...data,
            // Pass in new value
            [event.target.name]: event.target.value,
        })
    }

    // We need a handle submit function for our button
    const handleSubmit = (event) => {
        event.preventDefault()

        // We need to make an axios call. 
        // Instead of calling axios post, we'll use AxiosWithAuth as 
        //  a function in place of axios
            // We are using are axios instance with predefined values,
            // rather than just plain old axios
        AxiosWithAuth()
            .post("/login", data)
            .then(result => {
                // Store our new token in local storage so it persists
                localStorage.setItem("token", result.data.token)

                // Redirect the user to their account page after logging in
                props.history.push("/account")
            })
            .catch(error => {
                setError(error.response.data.message)
            })
    }


    return (
        <>
           
            <p>Hi from Login!</p>  

            <form onSubmit={handleSubmit}>
                {/* Inside the component, we can write a simple ternary that says
                    if error exists or something is in there that is undefined, show
                    a div with className of error, and display the error */}
                {error && <div className="error">{error}</div>}

                {/* Create some input fields and a button for the form */}
                <input 
                    type="text"
                    autoComplete="username"
                    name="username"
                    placeholder="Username"
                    // Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.username}
                    onChange={handleChange}
                    />

                <input 
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    placeholder="Password"
                    // Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.password}
                    onChange={handleChange}
                    />
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;