exports.get=(compe)=>{
    let sorted =[];
   let teams = compe.teams;
   for (let i = 0; i < teams.length; i++) {
     let players=  teams[i].players
     let total = getTotal(players)
    
       
   }

}

getTotal(p){
  console.log('called getTotal')

}