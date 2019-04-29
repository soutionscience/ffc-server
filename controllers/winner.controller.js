let League = require('../models/leagues');
let calculateWinner = require('../scripts/winner.script')

// sent a league address by winner router
// finds league and sends all users address found in league to calulateWinner function
exports.getWinner =(req, res, next)=>{
    // let query = {_: req.body.id}
    League.findById(req.params.id, (err, resp)=>{  
        if(err){
            console.log('user not found');
            res.status(400).send('user not found')
        }else{
            resp.users.forEach(element => {
        calculateWinner.calculate(element);
          });

        }
        findWinner(resp.users);
})

}
function findWinner(users){
    console.log('users ', users)
   let sorted= users.sort(function(a, b){return b.teamPoints - a.teamPoints});
    console.log('users ni ?', sorted)
}