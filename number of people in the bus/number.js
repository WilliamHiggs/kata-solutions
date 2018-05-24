
var number = function(busStops){
  var humansIn = [];
  var humansOut = [];
  for(let i = 0; i < busStops.length; i++) {
    humansIn.push(busStops[i][0]);
    humansOut.push(busStops[i][1]);
  }
  return humansIn.reduce((a,b)=>a+b) - humansOut.reduce((a,b)=>a+b);
}
