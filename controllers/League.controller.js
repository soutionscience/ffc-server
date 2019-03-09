let League = require('../models/leagues');

exports.get = (req, res, next)=>{
  if(!req.body.etherId){
  League.find({})
  .exec((err,resp)=>{
    if(err) throw err;
    res.status(200).json(resp)
  })
}else{
  let query = {etherId: req.body.etherId}
  League.find(query, (err, resp)=>{
    if(err) throw err;
    res.status(200).json(resp)
  })
}

}

exports.post= (req,res, next)=>{
  let newLeague = new League(req.body);
  newLeague.save((err, resp)=>{
    if(err) throw err;
    res.status(200).send('new League Saved')

  })

}

exports.postCompe = (req, res, next)=>{
  League.findById(req.params.id, (err, resp)=>{
    if(err) throw err;
    resp.competions.push(req.body);
    resp.save((err, resp)=>{
      if(err) throw err;
      res.status(201).send('added competion to team')
    })

  })
}

exports.getOne= (req, res, next)=>{
  console.log('hitting get')
  let query = {etherId: req.body.etherId}
  League.find({query}, (err, resp)=>{
    if(err) throw err;
     res.status(200).json(resp);
  })

}

exports.deleteAll= (resq, res, next)=>{
  console.log('hitting delete');
  League.deleteMany({}, (err, resp)=>{
    if(err) throw err;
    res.status(200).send("deleted all leagues")
  })
}

