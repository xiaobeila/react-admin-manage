var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "id": Number,
    "username": String,
    "password": String,
    "phone": Number,
    "sex": Number,
    "state": Number,
    "interest": Number,
    "birthday": String,
    "address": String,
}, { versionKey: false });

// versionKey __v 版本的意思
module.exports = mongoose.model('User', userSchema);