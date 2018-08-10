var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "id": Number,
    "username": String,
    "password": String,
    "phone": Number,
    "sex": Number,
    "isMarried": Number,
    "state": Number,
    "interest": Number,
    "birthday": String,
    "address": String,
});

module.exports = mongoose.model('User', userSchema);