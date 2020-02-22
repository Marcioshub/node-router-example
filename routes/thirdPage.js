const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.json({ msg: "hello from third page" });
});

module.exports = router;
