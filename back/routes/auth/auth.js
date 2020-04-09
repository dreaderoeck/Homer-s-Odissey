const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const connection = require("../../helpers/db");

const router = express.Router();

router.post("/signup", function (req, res, next) {
  // Store hash in database
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    lastname: req.body.lastname,
  };

  connection.query(
    "INSERT INTO users (email, password, name, lastname) VALUES(?,?,?,?)",
    [user.email, user.password, user.lastname, user.name],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(500).json({ flash: error.message });
      } else {
        res.status(200).send(user);
        res.end();
      }
    }
  );
});

router.post("/signin", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (!user) {
      return res.status(400).json({ message: info.message });
    }

    const token = jwt.sign(
      JSON.stringify(user),
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.status(200).send({ user, token });
  })(req, res, next);
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).send(req.user);
  }
);

module.exports = router;
