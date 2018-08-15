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
    "created_at": String,
    "updated_at": String,
    "deleted_at": String,
}, { versionKey: false, timestamps: { createdAt: 'created', updatedAt: 'updated' } });

// versionKey __v 版本的意思
module.exports = mongoose.model('User', userSchema);