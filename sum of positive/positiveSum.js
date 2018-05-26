
function positiveSum(arr) {
  return arr.map(x => x >= 1 ? x : x = 0 ).reduce((a, b) => a + b, 0);
}
