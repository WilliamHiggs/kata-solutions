
function getSize(width, height, depth) {
  var output = [];
  var surfaceArea = 2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);
  var volume = width * depth * height;
  output.push(surfaceArea);
  output.push(volume);
  return output;
}
