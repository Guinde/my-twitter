const User = require("../database/models/user.model");

exports.getUsers = async (search) => {
    try {
        const regExp = `^${ search }`;
        const reg = new RegExp(regExp);
        return User.find( {username: { $regex: reg }} ).exec();
    } catch(e) {
        throw e
    }
}

exports.createUser = async (user) => {
    try {     
        const hashPwd = await User.hashPassword(user.password);
        const newUser = new User({
            username: user.username,
            local: {
                email: user.email,
                password: hashPwd
            }
        })
        return newUser.save();
    } catch(e) {
        throw e;
    }

}

exports.findUserPerEmail = (email) => {
    return User.findOne({'local.email': email}).exec();
}

exports.findUserPerId = (id) => {
    return User.findById(id).exec();
}

exports.findUserPerUsername = (username) => {
    return User.findOne({username: username}).exec();
}

exports.addNewUseridToFollow = (currentUser, userId) => {
    return User.updateOne({_id: currentUser._id}, { $push: { following: userId} });
}

exports.removeUseridToFollow = (currentUser, userId) => {
    return User.updateOne({_id: currentUser._id}, { $pull: { following: userId} });
}

