var StattleshipAPI = require('node-stattleship');
var something = new StattleshipAPI('cfccc6c4a2b20028fb66d881d406f4ca');
// var params = {
//   season_id:"mlb-2016",
//   interval_type:"regularseason",
//   on:"today"
// };
// statleship.players('baseball', 'mlb', params).then(function(players){
//   players.forEach(function(element, index, array){
//     console.log(element, index, array);
//   });
// });
// console.log(something.games);

var params = {

};
something.games('football', 'nfl', params).then(function(games){
  games.forEach(function(e,i,a){
    //console.log(e.scoreline, e.on);
    console.log(e.title, e.on);
  });
});
