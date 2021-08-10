import React, { useEffect } from "react"
import { Route } from "react-router"
import { useDispatch } from "react-redux"
import Movies from "./Movies"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Register from "../components/Register"
import Login from "../components/Login"
import Mymovies from "../components/MyMovies"
import { getPassportUser } from "../store/user"

const App = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getPassportUser())
  // }, [])

  return (
    <>
      <Navbar />
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route
        exact
        path="/mymovies/:id"
        render={({ match }) => <Mymovies userId={match.params.id} />}
      />
      <Route>
        <Movies />
      </Route>
      <Footer />
    </>
  )
}

export default App