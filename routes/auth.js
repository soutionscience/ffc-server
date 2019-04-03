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

    res.send({"challenge": req.metaAuth.challenge})
  });

router.get('/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
    console.log('hitting new 2')
    console.log('recoverd', req.metaAuth.recovered)
    let token
    let user
    if (!req.metaAuth.recovered) {
      // Signature matches the cache address/challenge
      // Authentication is valid, assign JWT, etc.
      console.log('user address ', userAddress)
       User.find({address: userAddress}, (err, resp)=>{
        if(err) throw err;
        user=resp[0];
        console.log('finding user ', user)
  
        token = verify.getToken(user)
        console.log('token ', token)
        res.status(200).json({
          status: 'Login successful!',
          success: true,
          token: token
        });
      })
      
      
    } else {
      // Sig did not match, invalid authentication
      console.log('error is here')
      res.status(500).send();
    };
  });

module.exports= router

