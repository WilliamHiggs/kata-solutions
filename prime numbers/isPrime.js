
function isPrime(n) {
    if (n === 2) {
    return true;
  }
  if (n % 2 === 0 || n < 0) {
    return false;
  }
  for(let i = 3, s = Math.sqrt(n); i <= s; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return n !== 1;
}


function getPrimes(start, finish) {
  var list = [];
  var highest;
  var lowest;
  if (start < finish) {
    highest = finish;
    lowest = start;
  } else {
    lowest = finish;
    highest = start;
  }
  for(var i = lowest; i <= highest; i++) {
    list.push(i);
  }
  function allPrimes(arr) {
    return arr.map(x => isPrime(x) ? x : '.').filter(x => x !== '.');
  };

 return allPrimes(list);
}
