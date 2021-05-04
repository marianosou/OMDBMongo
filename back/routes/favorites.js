const router = require("express").Router()
const { isLoggedIn } = require("../controllers/user")
const { getFavorites, getFavorite, addRemoveFavorite } = require("../controllers/favorite")

router.get("/:userId", isLoggedIn, getFavorites);
router.get("/one/:id", getFavorite)
router.post("/", addRemoveFavorite);  
  
module.exports = router;