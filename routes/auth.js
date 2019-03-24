let  express = require('express');
let router = express.Router();
let controller = require('../controllers/auth.controller');
const metaAuth = require('meta-auth')()




router.get('/:MetaAddress', metaAuth, (req, res) => {
    // Request a message from the server
    console.log('hitting new', metaAuth.message )

    
    res.send({"challenge": req.metaAuth.challenge})
  });

router.get('/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
    console.log('hitting new 2')
    console.log('recoverd', req.metaAuth.recovered)
    if (req.metaAuth.recovered) {
      // Signature matches the cache address/challenge
      // Authentication is valid, assign JWT, etc.
      res.send(req.metaAuth.recovered);
    } else {
      // Sig did not match, invalid authentication
      console.log('error is here')
      res.status(500).send();
    };
  });

module.exports= router

