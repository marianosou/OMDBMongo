import React from "react"
import { Route } from "react-router"
import Movies from "./Movies"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Register from "../components/Register"
import Login from "../components/Login"
import Mymovies from "../components/MyMovies"

const App = () => {
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