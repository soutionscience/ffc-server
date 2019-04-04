let  express = require('express');
let router = express.Router();
let User = require('../models/users')
let controller = require('../controllers/auth.controller');
const MetaAuth = require('meta-auth');
const metaAuth = new MetaAuth({
  signature: 'MetaSignature',
  message: 'MetaMessage',
  address: 'MetaAddress',
  banner: 'Example Site Banner'
});
let verify = require('./verify')

let userAddress;

router.get('/:MetaAddress', metaAuth, (req, res) => {
    // Request a message from the server
    userAddress = req.params.MetaAddress

    res.send(req.metaAuth.challenge)
  });

router.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res)=> {
    let token
    let user
    console.log('hitting new 2')
    // console.log(req.metaAuth.recovered)
    res.status(200).send({'test': 'me'})
});

module.exports= router

