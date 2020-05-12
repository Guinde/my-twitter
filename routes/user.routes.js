const router = require('express').Router();
const { signupForm, signup, uploadImage, userProfile, userList, followUser, unfollowUser } = require("../controllers/user.controller");
const { ensureIsAuthenticated } = require("../config/guards.config");

router.get("/", userList);
router.get("/signup", signupForm);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unfollowUser);
router.get("/:username", userProfile);

router.post("/signup", signup);
router.post("/update/image", ensureIsAuthenticated, uploadImage)

module.exports = router;