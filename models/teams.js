const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let team = new Schema({
    name: String,
    position: Number,
    short_name: String,
    code: Number

})

module.exports = mongoose.model('team', team)