const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    birthday: String,
    stage: String,
    pathology: String,
    address: String,
    hospital_network: String,
    diagnosis_date: String,
    about: String,
    status: String,
    doctor: String,
    connect: String,
    topics: String,
});

module.exports = mongoose.model('User', UserSchema);