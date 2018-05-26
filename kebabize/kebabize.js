
function kebabize(str) {
  var res = "";
  var notLetter = (str) => /^[0-9-]*$/.test(str);

  var b = str.split("").map(
    x => notLetter(x) ? x :
    x == x.toUpperCase() ?
    res += "-" + x.toLowerCase() :
    res += x
  );
  return res[0] == "-" ? res.substring(1) : res;
}
