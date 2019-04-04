const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

let user = new Schema({
    nonce: {
        allowNull: false,
        type: Number,
        defaultValue: () => Math.floor(Math.random() * 1000000) // Initialize with a random nonce
      },
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
    players:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'player'
    }]
})

user.plugin(passportLocalMongoose)
module.exports = mongoose.model('user', user)