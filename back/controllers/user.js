const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../models/User");

const isLoggedIn = ((req, res, next) => {
  const token = req.body.token
  if (token) {
    jwt.verify(token, req.app.get("secret"), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: "autenticacion fallida"
        })
      } else {
        req.decoded = decoded;
        next();
      }
    })
  }
  else {
    return res.status(403).json({
      succes: false,
      message: "no existe el token"
    })
  }
})

const registerUser = (req, res) => {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function (err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

const loginUser = (req, res) => {
  const { email, password } = req.body
  User.findOne({
    email
  }, function (err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(password)) {
      return res.status(401).send("Invalid email or password");
    }
    return res.json({email: user.email, token: jwt.sign({ email: user.email, nickName: user.nickName, _id: user._id }, 'omdb') });
  });
}


const getUser = (req, res, next) => {
  if (req.user) {
    res.send(req.user);
    next();
  } 
  else {
   return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { isLoggedIn, registerUser, loginUser, getUser }