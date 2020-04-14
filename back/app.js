require("dotenv").config();

// declare all the necessary libraries
const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const passport = require("passport");
const authRouter = require("./routes/auth/auth");
const localStrategy = require("./auth/local-strategy");
const jwtStrategy = require("./auth/jwt-strategy");

const port = process.env.PORT || 5000;
const app = express();

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(passport.initialize());

app.use("/auth", authRouter);

// implement the API part
app.get("/", (req, res) => {
  res.send("youhou");
});

// in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// launch the node server
// let server = app.listen(process.env.PORT || 5000, function() {
//   console.log("Listening on port " + server.address().port);});
app.listen(port, () => console.log(`Listening on port ${port}`));
