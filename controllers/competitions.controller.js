let Compe= require('../models/competitions');

exports.post = (req, res, next)=>{
  console.log('are you posting competitions?')
    let newCompe = new Compe(req.body);
    newCompe.save((err, resp)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(resp)
        }
    })
}
exports.get = (req, res, next)=>{
    console.log('getting new Competitions')
    // if(!req.body.etherId){
    Compe.find({})
    .populate('teams')
    .exec((err,resp)=>{
      if(err) throw err;
      console.log('compe ', resp)
      res.status(200).json(resp)
    })
  //}
  // else{
  //   let query = {etherId: req.body.etherId}
  //   Compe.find(query, (err, resp)=>{
  //     if(err) throw err;
  //     res.status(200).json(resp)
  //   })
  // }
}
exports.getOne=(req, res, next)=>{
  let query = {_id: req.params.id}
  console.log('hitting one')
  Compe.findOne(query)
  .populate('teams')
  .exec((err, resp)=>{
    if(err){
      res.status(400).send('error geting compe')
    }else{
      res.status(200).json(resp)
    }
  })

}


exports.deleteAll= (req, res, next)=>{
    console.log('hitting delete');
    Compe.deleteMany({}, (err, resp)=>{
      if(err) throw err;
      res.status(200).send("deleted all leagues")
    })
  }

  exports.postUser=(req, res,next)=>{
    console.log('hitting post user ', req.params.compeId);
    let query = {etherId: req.params.compeId}
    Compe.findOne(query, (err, resp)=>{
      if(err){
        console.log('competitions with id: ', req.params.compeId,   'not found ', );
        res.status(400).send('compe not found')
      }else{
        resp.teams.push(req.body.userId)
        resp.playerCount+=1
        resp.save((err, resp)=>{
          if(err){
            console.log('user not added to competitions')
            res.status(400).send('user not added to competition')
          }else{
            console.log('user added to compe!!!');
            res.status(200).send(resp)
          }
        })
      }
    })
    // console.log('q', query)

  }