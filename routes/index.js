const router = require('express').Router();
const { ensureIsAuthenticated } = require("../config/guards.config");
const tweetRouter = require('./tweet.routes.js');
const userRouter = require('./user.routes.js');
const authRouter = require('./auth.routes.js');

router.use("/tweet", ensureIsAuthenticated, tweetRouter);
router.use("/user", userRouter);
router.use("/auth", authRouter);

router.get("/", (req, res) => {
    res.redirect("tweet/all");
})


module.exports = router;