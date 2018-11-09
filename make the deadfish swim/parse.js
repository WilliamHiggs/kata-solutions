// Return the output array, and ignore all non-op characters
function parse(data) {
  var returnArray = [];
  var value = 0;
  
  data.split('').forEach((command) => {
    switch (command) {
      case 'i':
        value++;
        break;
      case 'd':
        value--;
        break;
      case 's':
        value = value**2;
        break;
      case 'o':
        returnArray.push(value);
        break;
      default:
        break;
      }
  });
  return returnArray;
}
