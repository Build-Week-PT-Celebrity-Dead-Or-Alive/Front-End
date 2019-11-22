import React, {useState} from "react";
// Instead of importing axios, we'll import AxiosWithAuth, axios can be removed
import AxiosWithAuth from '../../../Utilities/AxiosWithAuth';
import styled from 'styled-components';

const FormStyle = styled.div`
    background: #44B3C2;
    margin: 5% auto 0;
    width: 40%;
    border: 1px solid black;
    height: 25%;
    display: flex;
    flex-direction: column;
    border-radius: 34px;
    font-family: 'Supermercado One', cursive;
    margin-bottom: 30px;
    box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.45);
`;

const StyledP = styled("p")`
    color: #fff;
    font-size: 2.1rem;
    margin-top: 3%;
`;

const StyledInput = styled("input")`
    width: 60%;
    margin: 1%;
`;

const StyledButton = styled("button")`
    margin: 5% 37%;
    border-radius: 5%;
    width: 26%;
    display: flex;
    justify-content: center;
    background-color: LightGray;
`;


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
        <FormStyle>
           
            <StyledP>Please Login</StyledP>  

            <form onSubmit={handleSubmit}>
                {/* Inside the component, we can write a simple ternary that says
                    if error exists or something is in there that is undefined, show
                    a div with className of error, and display the error */}
                {error && <div className="error">{error}</div>}

                {/* Create some input fields and a button for the form */}
                <StyledInput 
                    type="text"
                    autoComplete="username"
                    name="username"
                    placeholder=" Username"
                    // Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.username}
                    onChange={handleChange}
                    />

                <StyledInput 
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    placeholder=" Password"
                    // Attach these values and the handleChange function to 
                    //    each one of our inputs
                    value={data.password}
                    onChange={handleChange}
                    />
                <StyledButton type="submit">Login</StyledButton>
            </form>
        </FormStyle>
    )
}
export default Login;