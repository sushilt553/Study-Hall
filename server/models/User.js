const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretOrKey = require('../config/keys').secretOrKey;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 7,
        max: 20
    }
})

UserSchema.statics.signup = async function(username, password){
    const User = this;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({username, password: hashedPassword});

    if (user.save()){
        user.token = "Bearer " + jwt.sign({_id: user._id}, sercretOrKey);
        user.loggedIn = true;
        return user;
    }
    return null;
}

UserSchema.statics.login = async function(username, password){
    const User = this;
    const user = await User.findOne({username});

    if (user && (await bcrypt.compare(password, user.password))){
        user.token = "Bearer " + jwt.sign({_id: user._id}, secretOrKey);
        user.loggedIn = true;
        return user;
    }
    return null;
}

module.exports = mongoose.model('User', UserSchema);
