const User = require("./User")
const Favorite = require("./Favorite")
const db = require("../db")

Favorite.belongsTo(User)

module.exports = { User, Favorite, db }