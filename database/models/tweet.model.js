const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [140, "tweet trop long"],
        minlength: [2, "tweet trop court"],
        required: [true, "champ requis"]
    },
    author: {
        type: schema.Types.ObjectId,
        ref: 'users',
        require: true
    }
})

module.exports = mongoose.model("tweets", tweetSchema);