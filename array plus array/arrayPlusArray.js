
function arrayPlusArray(arr1, arr2) {
  var a = arr1.reduce((a, b) => a + b, 0);
  var b = arr2.reduce((a, b) => a + b, 0);
  return a + b;
}
