const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const competition = require('./competitions')



let leagues = new Schema({
    name: String,
    etherId: String,
    desc: String,
    active: {
        type: Boolean,
        default: false},
    competions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'competition'
    }]

})


// let leagues = new Schema({
//     league: [myLeague]
// })




module.exports = mongoose.model('leagues', leagues)