const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const connection = require("../helpers/db");

module.exports = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET,
  },
  (jwtPayLoad, done) => {
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [jwtPayLoad.email],
      (error, results) => {
        if (error) {
          return done(error);
        }

        const user = results[0];
        return done(null, user);
      }
    );
  }
);
