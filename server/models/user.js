var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    "id": Number,
    "username": { type: String },
    "password": { type: String },
    "phone": { type: Number },
    "sex": { type: Number },
    "state": { type: Number },
    "interest": { type: Number },
    "birthday": { type: String },
    "address": { type: String },
    "created_at": { type: Date, default: Date.now },
    "updated_at": { type: Date, default: Date.now },
    "deleted_at": { type: Date },
}, { versionKey: false });

// versionKey __v 版本的意思
module.exports = mongoose.model('User', userSchema);