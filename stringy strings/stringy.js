
function stringy(size) {
  var output = '';
  for(let i = 0; i < size; i++) {
    if(i % 2 === 1) {
      output += '0';
    }
    else {
      output += '1';
    }
  }
  return output;
}
