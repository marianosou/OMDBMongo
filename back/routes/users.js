const router = require("express").Router()
const passport = require("passport");
const { registerUser, loginUser, logoutUser, getUser, isLoggedIn} = require("../controllers/user")

router.post("/register", registerUser);
router.post("/login", passport.authenticate("local"), loginUser);
router.post("/logout", logoutUser);
router.get("/me", isLoggedIn, getUser)

module.exports = router;