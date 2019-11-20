const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    birthday: String,
    stage: String,
    pathology: Array,
    address: String,
    hospital_network: String,
    diagnosis_date: String,
    about: String,
    status: String,
    doctor: String,
    connect: Array,
    topics: Array,
    surgeon: String,
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema);