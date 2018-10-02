const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let player = new Schema({
    web_name: String,
    first_name: String,
    second_name: String,
    squad_number: Number,
    now_cost: Number,
    teamName: String,
    pointsTotal: Number,
    pointsWeek: Number,
    address: String,
    team_code: Number

})



let userTeam = new Schema({
    name: String,
    players: [player]
})


module.exports = mongoose.model('userTeam', userTeam)