const { User } = require("../models")

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) next()
    else res.status(401).send("No autorizado")
  }

const registerUser = (req, res) => {
    User.create(req.body).then((user) => {
      res.status(201).send(user);
    });
  }

const loginUser = (req, res) => {
    res.send(req.user);
  }

const logoutUser = (req, res) => {
    req.logOut();
    res.sendStatus(200);
}
  
const getUser = (req, res) => {
  res.send(req.user)
}

module.exports = {isLoggedIn, registerUser, loginUser, logoutUser, getUser}