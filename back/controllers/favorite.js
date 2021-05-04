const { Favorite } = require("../models")

const getFavorites = (req, res) => {
    Favorite.findAll({
        where: { userId: req.params.userId }
    })
        .then(favorites => res.send(favorites))
}

const getFavorite = (req, res) => {
    Favorite.findOne({
        where: { id: req.params.id }
    })
        .then(favorite => res.send(favorite))
}

const addRemoveFavorite = (req, res) => {
    Favorite.findOne({
        where: {
            imdbID: req.body.imdbID,
            userId: req.body.userId
        }
    })
        .then(favorite => {
            if (!favorite) {
                Favorite.create(req.body)
                    .then(favoriteAdded => favoriteAdded.setUser(req.body.userId))
                    .then(() => res.status(200))
            } else {
                Favorite.destroy({
                    where: {
                        imdbID: req.body.imdbID,
                        userId: req.body.userId
                    }
                })
                    .then(() => res.status(200))
            }
            Favorite.findAll()
                .then(favorites => res.send(favorites))
        })
}

module.exports = { getFavorites, getFavorite, addRemoveFavorite }