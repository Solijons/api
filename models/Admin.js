const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    password: String,
});

module.exports = mongoose.model('Admin', Admin);