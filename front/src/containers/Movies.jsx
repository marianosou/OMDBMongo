import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { moviesData } from "../store/movies"
import { getCurrentUser } from "../store/user"
import SingleMovie from "../components/SingleMovie"
import MovieCard from "../components/MovieCard"

const Movies = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.Search)
  const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(moviesData())
    dispatch(getCurrentUser())
  }, [])

   return (
    <div>
      <Route exact path="/">
        <div className="row movies-custom">
          {movies ?
            movies.map((movie, i) =>
              <MovieCard
                key={i}
                movie={movie}
                user={user}
              />
            )
            :
            <div className="noResultsDiv">
              <h3>No results...</h3>
            </div>
          }
        </div>
      </Route>
      <Route
        path={`/movies/:id`}
        render={({ match }) => <SingleMovie movieId={match.params.id} />}
      />
    </div>
  )
}
 
export default Movies
