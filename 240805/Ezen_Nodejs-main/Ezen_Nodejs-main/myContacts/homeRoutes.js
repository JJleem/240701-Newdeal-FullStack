const express = require("express");
const router = express.Router();
const { login, homeContact } = require("./controllers/contactController");
router.route("/").get(homeContact).post(login);

module.exports = router;
