
function feast(beast, dish) {
  function getChars(x) {
    let y = x.length;
    let a = x.charAt(0);
    let b = x.charAt(y -1);
    return a + b;
  }
  return getChars(beast) === getChars(dish) ? true : false;
}
