const express = require("express");
const router = express.Router();
const { register, registerHome } = require("./controllers/contactController");
router.route("/").get(registerHome).post(register);

module.exports = router;
