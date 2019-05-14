let League = require('../models/leagues');
let calculateWinner = require('../scripts/winner.script')

// sent a league address by winner router
// finds league and sends all users address found in league to calulateWinner function
exports.getWinner =(req, res, next)=>{
    // let query = {_: req.body.id}
 console.log('params ', req.params.id)
League.findById(req.params.id).populate('users')
    .exec((err, resp)=>{
        if(err){
            console.log('error finding league')
        }else{
    //  console.log('what is in resp ', resp);
     resp.users.forEach(element => {
                calculateWinner.calculate(element._id);
                  });
        }
        //findWinner(resp.users)
    })

}
function findWinner(users){
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    console.log( 'each element ', element.teamPoints)
    
}
  
}