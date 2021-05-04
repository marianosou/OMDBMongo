import { createAsyncThunk, createAction, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCurrentUser = createAction('GET_CURRENT_USER')
export const registerUser = createAsyncThunk('REGISTER_USER', (user) => {
    return axios.post("/api/users/register", user)
        .then(res => res.data)
})
export const loginUser = createAsyncThunk('LOGIN_USER', (user) => {
    return axios.post("/api/users/login", user)
        .then(res => res.data)
        .catch(err => err)
})
export const logoutUser = createAsyncThunk('LOGOUT_USER', () => {
    return axios.post("/api/users/logut")
        .then(res => res.data)
})


const currentUserReducer = createReducer({}, {
    [getCurrentUser]: (state, action) => action.payload,
    [registerUser.fulfilled]: (state, action) => action.payload,
    [loginUser.fulfilled]: (state, action) => action.payload,
    [logoutUser.fulfilled]: (state, action) => action.payload
})

export default currentUserReducer

