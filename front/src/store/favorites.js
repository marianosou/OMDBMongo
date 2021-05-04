import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"

export const getFavorites = createAsyncThunk("GET_FAVORITES", (userId) => {
    return axios.get(`/api/favorites/${userId}`).then(({data}) => data)
})
export const addRemoveFavorite = createAsyncThunk("ADD_REMOVE_FAVORITE", (movie) => {
    return axios.post(`/api/favorites`, movie).then(({ data }) => data)
})

const favoritesReducer = createReducer([], {
    [getFavorites.fulfilled]: (state, action) => action.payload,
    [addRemoveFavorite.fulfilled]: (state, action) => action.payload
})

export default favoritesReducer