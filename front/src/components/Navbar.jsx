import React, { useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser, getCurrentUser } from "../store/user"
import SearchMovies from "../components/SearchMovies"
import { log, success, error } from "../../utils/logs"

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [])

  const handleLogout = async () => {
    log("logout attempt...");
    dispatch(logoutUser())
      .then(() => success("logged out"),
        history.push("/"))
    // .catch ( response ) {
    //   error(response.status, response.statusText);
    // }
  };

  return (
    <nav className="navbar">
      <div>
        <Link className="navbar-brand text-white navbar-font" to="/">
          OMDB
        </Link>
      </div>
      <div className="search-container">
        <SearchMovies />
      </div>
      {!user.nickname ? (
        <div className="navbarButtons">
          {" "}
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      ) : (
        <div className="logoutButton" >
          <button
            onClick={handleLogout}
          >Logout</button>
          <Link to={`/myMovies/${user.id}`}>
          <p>Hi {user.nickname}!</p>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
