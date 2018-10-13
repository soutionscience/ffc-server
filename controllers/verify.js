const User = require('../models/users');
const jwt = require('jsonwebtoken');


exports.getToken = function(user){ // assing jwt token to user provided
    return jwt.sign(user, process.env.secretKey, {
        expiresIn: 36000
    })
}