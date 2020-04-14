const LocalStrategy = require("passport-local").Strategy;
const connection = require("../helpers/db");
const bcrypt = require("bcrypt");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false,
  },
  (email, password, done) => {
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results, fields) => {
        const foundUser = results[0];

        if (!foundUser) {
          return done(null, false, {
            message: "Can't find a user with this email",
          });
        }

        bcrypt
          .compare(password, foundUser.password)
          .then((isPasswordCorrect) => {
            if (isPasswordCorrect) {
              done(null, foundUser);
            } else {
              done(null, false, { message: "Wrong password" });
            }
          })
          .catch((error) => console.error(`compare error: ${error}`));
      }
    );
  }
);
