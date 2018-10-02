let userTeam = require('../models/userTeams')


exports.post = function(req, res, next){
    let newUserTeam = new userTeam(req.body)
    newUserTeam.save(function(err, resp){
        if(err) throw err;
        res.status(201).send('new user Team saved')
    })

}
exports.get = function(req, res, next){
    console.log("hitting get")
    userTeam.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}