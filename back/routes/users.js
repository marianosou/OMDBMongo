const router = require("express").Router()
const { isLoggedIn, registerUser, loginUser, getUser } = require("../controllers/user")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/me", isLoggedIn, getUser)

module.exports = router;