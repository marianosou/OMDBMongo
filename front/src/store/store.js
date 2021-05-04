import { configureStore, combineReducers } from "@reduxjs/toolkit"
import logger from "redux-logger"
import moviesReducer from "./movies"
import movieReducer from "./movie"
import favoritesReducer from "./favorites"
import currentUserReducer from "./user"

const reducers = combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    favorites: favoritesReducer,
    user: currentUserReducer
})

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: reducers
})

export default store













