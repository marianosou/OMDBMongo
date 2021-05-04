const express = require("express");
const app = express();
const helmet = require("helmet");

const http = require("http");
const config = require("./server.config");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const path = require("path");

const passport = require("passport");
const localStrategy = require("passport-local").Strategy;


const { db, User } = require("./models");
const authAPI = require("./routes");

app.use(express.static(__dirname + "/public"));

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  sessions({
    secret: "bootcamp",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", authAPI);
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({ force: false }).then(() => {
  http.createServer(app).listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`);
  });
});