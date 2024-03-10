const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers/user.server.controller");

router.post("/", userLogin);

module.exports = router;