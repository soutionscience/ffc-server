const MetaAuth = require('meta-auth');
const metaAuth = MetaAuth()

  
// exports.get = (metaAuth, (req, res, next)=>{
//     console.log('hitting auth')
//     console.log('what is', req.metaAuth.challenge)
//      res.send({"challenge":req.metaAuth.challenge})

//   })

//  exports.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
//     if (req.metaAuth.recovered) {
//       // Signature matches the cache address/challenge
//       // Authentication is valid, assign JWT, etc.
//       res.send(req.metaAuth.recovered);
//     } else {
//       // Sig did not match, invalid authentication
//       res.status(500).send();
//     };
//   });