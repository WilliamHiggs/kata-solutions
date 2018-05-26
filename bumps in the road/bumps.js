
function bump(x) {
  var bumps = x.match(/n/gi);
  return bumps == null || bumps.length <= 15 ? "Woohoo!":"Car Dead";
}
