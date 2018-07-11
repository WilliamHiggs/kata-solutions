const reverseSeq = n => {
  var result = [];
  for (let i = 1; i < n + 1; i++) {
    result.push(i);
  }
  return result.reverse();
};
