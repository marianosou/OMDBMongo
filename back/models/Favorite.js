const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavoriteSchema = new Schema({
    Title: String,
    imdbID: String,
    Year: String,
    Poster: String,
    Type: String,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Favorite', FavoriteSchema)


