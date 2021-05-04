import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const movieData = createAsyncThunk("GET_MOVIE", (movieId) => {
    return axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=d021d0ee`).then(({ data }) => data)
})

const movieReducer = createReducer({}, {
    [movieData.fulfilled]: (state, action) => action.payload,
})

export default movieReducer