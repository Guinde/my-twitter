const router = require('express').Router();
const { tweetList, tweetNew, tweetAdd, tweetDelete, tweetEdit, tweetUpdate  } = require("../controllers/tweets.controller")

router.get("/all", tweetList);
router.get("/new", tweetNew);
router.get("/edit/:tweetId", tweetEdit);

router.post("/add", tweetAdd);
router.post("/update/:tweetId", tweetUpdate);

router.delete("/:tweetId", tweetDelete);

module.exports = router;