const User = require('../models/users');
const jwt = require('jsonwebtoken');


exports.getToken = function(user){ // assing jwt token to user provided
    console.log('calling getToken', user)
    return 'two'
//     return jwt.sign(user, process.env.secretKey, {
//         expiresIn: 36000
//     })
 }