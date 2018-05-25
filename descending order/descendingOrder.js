
function descendingOrder(n) {
  var a;
  n.toString().length > 1
    ? (a = parseInt(
        n
          .toString()
          .split("")
          .sort(function(a, b) {
            return b - a;
          })
          .join("")
      ))
    : (a = n);
  return a;
}
