const express = require("express");
const app = express();
const mongoose = require('mongoose');
const config = require("./server.config");
const path = require("path");
const routes = require("./routes");


mongoose.connect(config.db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("DB connected"))
  .catch(error => console.log(error))

app.set('secret', config.secret)

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", routes);
app.use("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(config.port, () => {
  console.log(`Server on port ${config.port}`)
})
