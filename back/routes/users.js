const router = require("express").Router()
const passport = require("passport");
const { registerUser, loginUser, logoutUser} = require("../controllers/user")

router.post("/register", registerUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.post("/logout", logoutUser);

module.exports = router;