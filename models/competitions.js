const mongoose= require('mongoose');
const schema = mongoose.Schema;
const userTeam = require('./userTeams')


let competition = new schema({
    users:String,
    winner: String,
    prizeMoney: Number,
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userTeam'
    }],
    complete: Boolean
})

module.exports = mongoose.model('competition', competition)