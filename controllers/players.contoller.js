let Player = require('../models/players');

exports.post =(req, res, next)=>{
    let newPlayer = new Player(req.body);
    newPlayer.save(function(err, resp){
        if(err) throw err;
        res.status(201).send('new player saved')
    })
}

exports.get = (req, res, next)=>{
    
    Player.find({})
    .exec(function(err, resp){
        if(err) throw err;
        res.status(200).json(resp)

    })
   
}
exports.delete =(req, res, next)=>{
    Player.deleteMany({})
    .exec(function(err, resp){
        res.status(200).send("deleted all")
    })

}