const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.objectId;
let playerSchema = require('./players')


let Team = new Schema({
    players:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'player'
    }]
})



let User = new Schema({
    username: String,
    balance: String,
    address: String,
    OauthId: String,
    OauthToken: String,
    email: String,
    admin:   {
        type: Boolean,
        default: false
    },
    teams: [Team]
});


module.exports = mongoose.model('user', User)