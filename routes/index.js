var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", function (req, res, next) {
  res.render("index", { title: "Log In" });
});

router.get("/signup", function (req, res, next) {
  res.render("index", { title: "Sign Up" });
});

module.exports = router;
