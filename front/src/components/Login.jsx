import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import { getFavorites } from "../store/favorites"
import { loginUser } from "../store/user"
import { log, success, error } from "../../utils/logs"

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [wrongPass, setWrongPass] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    log("login attempt...")
    dispatch(loginUser({
      email, password
    }))
      
      .then(res => res.payload)
      .then(res => success(`logged user ${res.email}`,
        dispatch(getFavorites(res.id)),
        history.push(`/mymovies/${res.id}`)
      ))
      .catch(( response ) => error(response.status, response.statusText,
      setWrongPass(true))
      )
  }

  return (
    <div className="loginContainer">
      <h3> Sign in to your account</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div>
            <input
              className="input"
              aria-label="Email address"
              type="text"
              required
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              aria-label="Password"
              type="password"
              required
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="buttom2">
            Login
          </button>
        </form>
      </div>
      {wrongPass
        ? < p >Wrong Email or Password</p>
        : ""}

      <hr />
      <Link to="/" className="btn btn-default text-light">
        Go Back To Movies
        </Link>
    </div>
  )
}

export default Login