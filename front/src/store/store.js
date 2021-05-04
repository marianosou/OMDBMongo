import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import moviesReducer from "./movies"
import movieReducer from "./movie"
import favoritesReducer from "./favorites"
import currentUserReducer from "./user"

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        favorites: favoritesReducer,
        user: currentUserReducer
    }
})

export default store













