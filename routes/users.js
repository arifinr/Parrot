var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:userId", function (req, res, next) {
  console.log("hello");
  res.render("index", { title: `${req.params["userId"]}` });
});

module.exports = router;
