const Sequelize = require("sequelize");
const db = require("../db");

class Favorite extends Sequelize.Model { }

Favorite.init(
    {
        Title: {
            type: Sequelize.STRING,
        },
        imdbID: {
            type: Sequelize.STRING,
        },
        Year: {
            type: Sequelize.STRING,
        },
        Poster: {
            type: Sequelize.STRING,
        },
        Type: {
            type: Sequelize.STRING,
        }
    },
    { sequelize: db, modelName: "favorite" }
)

module.exports = Favorite