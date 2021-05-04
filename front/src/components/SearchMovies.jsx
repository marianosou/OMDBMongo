import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { moviesData } from "../store/movies"

const SearchMovies = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(moviesData(value))
      .then(() => event.target.reset())
  }

  return (
    <div className="container search-container">
      <form id="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="searchText"
          placeholder="Search for Movies..."
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchMovies