import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { movieData } from "../store/movie"

const SingleMovie = ({ movieId }) => {
  const dispatch = useDispatch()
  const movie = useSelector((state) => state.movie)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(movieData(movieId))
      .then(() => setLoading(false))
  }, [])

  return (
    <>
      {loading ? (
        <div className="loader"></div>
      ) : (<div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8 card-detail">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {movie.Plot}
              <hr />
              <Link to="/" className="btn btn-default text-light">
                Go Back To Movies
            </Link>
            </div>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default SingleMovie