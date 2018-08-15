const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let player = new Schema({
    web_name: String,
    first_name: String,
    second_name: String,
    squad_number: Number,
    now_costs: Number,
    teamName: String,
    poinsTotal: Number,
    pointsWeek: Number,
    address: String

})


module.exports = mongoose.model('player', player)