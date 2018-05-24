
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  var output;
    if(mpg * fuelLeft >= distanceToPump) {
      output = true;
    } else {
      output = false;
     }
  return output;
};
