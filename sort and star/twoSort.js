
function twoSort(arr) {
  arr.sort();
  var a = arr[0];
  return a.split("").map((x,i) => i == a.length -1 ? x : x += "***").join("");
}
