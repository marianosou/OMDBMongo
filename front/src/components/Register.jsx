import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { registerUser } from "../store/user"
import { log, success, error } from "../../utils/logs"

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [nickname, setNickname] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    log("register attempt...")
    dispatch(registerUser(
      { email, nickname, password }
    ))
      .then(() => success(`new user registered`),
        (history.push("/login")))
      .catch(({ response }) => error(response.status, response.statusText,))
  }

  return (
    <div className="registerContainer">
      <h3 className="loginHijos">Create your account</h3>
      <div className="loginHijos">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />

          <div>
            <input
              className="input"
              aria-label="User NickName"
              type="text"
              required
              placeholder="User NickName"
              onChange={(event) => setNickname(event.target.value)}
            />
          </div>
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
          <div>
            <button type="submit" className="buttom2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <hr />
      <Link to="/" className="btn btn-default text-light">
        Go Back To Movies
      </Link>
    </div>
  )
}

export default Register