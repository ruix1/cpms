const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    phone: Number,
    gender: String
});


const userModel = mongoose.model('users', UserSchema);


module.exports = { User: userModel }