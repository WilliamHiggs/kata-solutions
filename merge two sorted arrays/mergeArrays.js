
function mergeArrays(arr1, arr2) {
  var joined = arr1.concat(arr2);
  var duplicatesRemoved = Array.from(new Set(joined));
  var reSorted = duplicatesRemoved.sort((a, b) => a - b);
  return reSorted;
}
