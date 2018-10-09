let userTeam = require('../models/userTeams')


exports.post = function(req, res, next){
    console.log("hitting post ", req.body)
    let newUserTeam = new userTeam(req.body)
    newUserTeam.save(function(err, resp){
        if(err) throw err;
        res.status(201).json(resp)
    })

}
exports.get = function(req, res, next){
    console.log("hitting get")
    userTeam.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })
}

exports.delete = function(req, res, next){
    console.log("htiing delete")
    userTeam.deleteMany({})
    .exec(function(err, resp){
        if(err) throw err
        res.status(200).send("deleted all")
    })
}