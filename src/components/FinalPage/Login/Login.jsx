import React, {useState} from "react";

function Login(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        username: "",
        password: "",
    })
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        api()
            .post("", data)
            .then(result => {
                localStorage.setItem("token", result.data.token)
                props.history.push("/account")
            })
            .catch(error => {
                setError(err.response.data.message)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className="error">{error}</div>}
            <input 
                type="text"
                autoComplete="username"
                name="username"
                placeholder="Username"
                value={data.username}
                onChange={handleChange}
                />
                <input 
                type="password"
                autoComplete="current-password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                />
                <button type="submit">Login</button>
        </form>
    )
}
export default Login;