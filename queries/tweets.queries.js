const Tweet = require("../database/models/tweet.model");

exports.getTweet = (tweetId) => {
    return Tweet.findById(tweetId).exec();
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.deleteTweet = (tweetId) => {
    return Tweet.findByIdAndDelete(tweetId).exec();
}

exports.updateTweet = (tweetId, body) => {
    return Tweet.findByIdAndUpdate(tweetId, body, { runValidators: true });
}

exports.getCurrentUserTweetsWithFollowing = (user) => {
    return Tweet.find({ author: { $in: [...user.following, user._id] }}).populate('author').exec();
}

exports.getUserTweetsFromAuthorId = (authorId) => {
    return Tweet.find({ author: authorId }).populate('author').exec();
}