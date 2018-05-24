
function betterThanAverage(classPoints, yourPoints) {

  classPoints.push(yourPoints);

  var classAverage = classPoints.reduce((a,b) => a + b / classPoints.length, 0);

  return yourPoints >= classAverage;

}
