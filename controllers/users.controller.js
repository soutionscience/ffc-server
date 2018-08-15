const User = require ('../models/users');
exports.post =(req, res, next)=>{
    let newUser = new User(req.body);
    newUser.save(function(err, resp){
        if(err) throw err;
        res.status(201).send('new User saved')
    })
}

exports.get = (req, res, next)=>{
    console.log("hitting get")
    User.find({})
    .populate('teams')
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).json(resp)

    })
   
}
exports.delete =(req, res, next)=>{
    User.deleteMany({})
    .exec(function(err, resp){
        res.status(200).send("deleted all")
    })

}

exports.postTeam = (req, res, next)=>{
    User.findById(req.params.id, (err, resp)=>{
        if(err) throw err;
        resp.teams.push({players: req.body._id});
        resp.save((err, resp)=>{
            if(err) throw err;
            res.status(201).send("added team to user")
        })
    })
}