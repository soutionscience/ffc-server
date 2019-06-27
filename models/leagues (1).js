const mongoose = require('mongoose');
const Schema = mongoose.Schema;



let leagues = new Schema({
    league: [league]
})

let league = new Schema({
    name: String,
    players: String,
    desc: String

})

module.exports = mongoose.model('leagues', leagues)