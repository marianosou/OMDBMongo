const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nickname: String,
  email: {
    type: String,
    unique: true,
  },
  hash_password: String,
})

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', UserSchema)