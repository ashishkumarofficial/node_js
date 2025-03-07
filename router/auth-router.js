const express = require("express");
 //import the file home and register
const { home,register } = require("../controllers/auth-controller");
const router = express.Router();

router.route("/").get(home);
router.route("/register").get(register);

module.exports = router   