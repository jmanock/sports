// var something = new XMLHttpRequest();
// something.open('GET', 'https://www.stattleship.com/baseball/mlb/games', false);
// something.send();
// // console.log(something.status, something.statusText);
// console.log(something.status);
$(document).ready(function(){
  // $.ajax({
  //   url:"https://www.stattleship.com/baseball/mlb/games",
  //   contentType:"application/json",
  //   Authorization:"Token cfccc6c4a2b20028fb66d881d406f4ca",
  //   Accept:"application/vnd.stattleship.com; version=1"
  // });

  // $.ajax({
  //   url:"https://www.stattleship.com/baseball/mlb/games",
  //   beforeSend:function(xhr){
  //     xhr.setRequestHeader("Authorization", "Token token=cfccc6c4a2b20028fb66d881d406f4ca");
  //   },
  //   type:'GET',
  //   dataType:'json',
  //   contnetType:'application/json',
  //   processData:false,
  //   Accept:'application/vnd.stattleship.com; version=1',
  //   success:function(data){
  //     console.log('working');
  //   },
  //   error:function(data){
  //     console.log('NOT working', data);
  //   }
  // });

  $.ajax({
    url:"https://www.stattleship.com/baseball/mlb/games",
    contentType:"application/json",
    Authorization:"Token token=cfccc6c4a2b20028fb66d881d406f4ca",
    Accept:"application/vnd.stattleship.com; version=1",
    Success:function(data){
      console.log(data);
    },
    Error:function(data){
      console.log('Fail', data);
    }
  });
});
