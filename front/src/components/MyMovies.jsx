import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const Mymovies = () => {
  const favorites = useSelector((state) => state.favorites)
  const user = useSelector((state) => state.user)

  return (
    <div className="welcomeDiv">
      <h3>Welcome to OMDB {user.nickname}!</h3>
      <hr></hr>
      <div className="row movies-custom">
        {favorites.length ?
          favorites.map((movie, i) =>
            <MovieCard
              key={i}
              movie={movie}
            />)
          : <div className="noResultsDiv">
            <h4>No movies added to favorites</h4>
          </div>}
        </div>
          <hr />
          <Link to="/" className="btn btn-default text-light">
            Go Back To Movies
      </Link>
        </div>
  )
}

export default Mymovies