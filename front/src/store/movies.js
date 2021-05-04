import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const moviesData = createAsyncThunk("GET_MOVIES", (search) => {
    if (!search) {
        const options = ["Paris", "Back", "Rome", "Star", "Godfather", "London", "Say", "Hello", "Bye"]
        search = options[Math.floor(Math.random() * options.length)]
    }
    return axios.get(`http://www.omdbapi.com/?s=${search}&apikey=d021d0ee`).then(({ data }) => data)
})

const moviesReducer = createReducer([], {
    [moviesData.fulfilled]: (state, action) => action.payload,
})

export default moviesReducer