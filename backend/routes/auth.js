const express = require("express");
const router = express.Router();
const {signin, signup} = require("../helpers/auth");


router.post("/login", signin)
router.post("/signup", signup)

module.exports = router;
