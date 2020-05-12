const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = schema({
    username: { 
        type: String,
        require: true,
        unique: true},
    local: {
        email: { 
            type: String, 
            require: true,
            unique: true },
        password: { 
            type: String, 
            require: true }
    },
    avatar: {
        type: String,
        default: '/images/default-user.svg'
    },
    following: { 
        type: [schema.Types.ObjectId],
        ref: 'users'
    }
})

userSchema.statics.hashPassword = (pwd) => { //statics fait reference à l'objet 
    return bcrypt.hash(pwd, 12);
}

userSchema.methods.comparePassword = function(pwd) { //methods fait reference à l'instance (au document)
    return bcrypt.compare(pwd, this.local.password);
}

module.exports = mongoose.model("users", userSchema);