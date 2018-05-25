
function anagrams(word, words) {
  var result = [];
  const inOrder = x => x.split('').sort().join('');
  words.map(x => inOrder(x) == inOrder(word) ? result.push(x) : null);
  return result;
}
