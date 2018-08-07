function evenOrOdd(str) {
  var even = str.split("").map(x => x%2==0? Number(x) : null).filter(x => x !== null).reduce((a,b) => a+b);
  var odd = str.split("").map(x => x%2!==0? Number(x) : null).filter(x => x !== null).reduce((a,b) => a+b);
  return even == odd ? 'Even and Odd are the same' : even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even';
}
