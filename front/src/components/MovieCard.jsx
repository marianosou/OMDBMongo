import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { addRemoveFavorite, getFavorites } from "../store/favorites"
import AddFav from "../components/AddFav"
import { log, success } from "../../utils/logs"

function MovieCard({ movie }) {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)
    const user = useSelector((state) => state.user)

    useEffect(() => {
    }, [favorites])

    const addEraseFavorite = (movie) => {
        const movie1 = { ...movie, userId: user.id }
        log("edit favorites attempt...")
        dispatch(addRemoveFavorite(movie1))
            .then(() => dispatch(getFavorites(user.id)))
            .then(() => success("favorites edited..."))

    }

    const checkFavorites = (imdbID) => {
        return favorites.some(favorite => favorite.imdbID === imdbID) ? true : false
    }

    return (
        <div className="movie-div">
            <Link to={`/movies/${movie.imdbID}`}>
                <img src={movie.Poster}></img>
                <p>{`${movie.Title} - ${movie.Year}`}</p>
            </Link>
            {user.id ? (
                <div
                    className="fav-div d-flex align-items-center justify-content-center"
                    onClick={() => addEraseFavorite(movie)}
                >
                    <AddFav
                        iconColor={checkFavorites(movie.imdbID) ? "red" : "white"}
                    />
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default MovieCard


