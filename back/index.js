const express = require("express");
const app = express();
const helmet = require("helmet");

const http = require("http");
const config = require("./server.config");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const path = require("path");

const { db } = require("./models");
const authAPI = require("./routes");

app.use(express.static(__dirname + "/public"));

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./services/passport");
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

app.use("/api", authAPI);
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

db.sync({ force: false }).then(() => {
  http.createServer(app).listen(config.port, () => {
    console.log(`Server listening at port ${config.port}`);
  });
});