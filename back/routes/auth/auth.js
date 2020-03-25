const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/signup", function(req, res, next) {
  res.send("I am in POST signup");
});

module.exports = router;
