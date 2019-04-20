const User = require ('../models/users');
const passport = require('passport');
// const verify = require('./verify')

let LocalStrategy = require('passport-local').Strategy
var local= passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// this controller registers new users, display users and post user's team to server


exports.post =(req, res, next)=>{
  console.log('hitting user post');
 let newUser= new User(req.body)
 newUser.save((err, resp)=>{
     if(err) throw err;
     setTimeout((function() {res.status(200).json(resp)}), 2000);
     
 })

  
}

exports.login = (req, res, next)=>{
    passport.authenticate('local', function(err, user, info){
        if(err){return next(err)}
        if(!user){return res.status(401).json({err:info})}
        req.logIn(user,function(err, mine ){
            if(err){console.log(err)
                return res.status(500).json({
                    err: 'Could not log in user',
                    mine: user
                })
            }
            var token = verify.getToken(user)
             res.status(200).json({
                 status: 'Login successfull!',
                 success: true,
                 token:token
             })
        })
    })(req, res, next)

}

exports.get = (req, res, next)=>{
    User.find({}, function(err, resp){
        if(err) throw err;
        res.json(resp)
    })

    // User.find({})
    // .populate('players')
    // .exec(function(err, resp){
    //     if(err) throw err;
    //     res.status(200).json(resp)

    // })

}
exports.delete =(req, res, next)=>{
    User.deleteMany({})
    .exec(function(err, resp){
        res.status(200).send("deleted all")
    })

}

exports.postTeam = (req, res, next)=>{
    console.log('is it this two?')
   User.findById(req.params.id, function(err, resp){
        if(err) throw err;
        //go through each player from req.body add it to players and save
        req.body.forEach(element => {
            resp.players.push(element);

        });
        resp.save((err, resp)=>{
            if(err) throw err;
            res.status(201).json(resp)
        })
    })
}

exports.getUser = (req, res, next)=>{
    console.log('get single user', req.params.id);
    let myAddress = req.params.id
    let query = {address: myAddress}
    User.findOne(query, (err, resp)=>{
        if(!resp) {
         
           return res.status(400).send({
                error: 'User not found'
             });
        }
        else{
            
        res.status(200).json(resp)

        }
    })

}
