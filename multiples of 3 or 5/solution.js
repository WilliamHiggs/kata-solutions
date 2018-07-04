function solution(number) {
  var arr = [];
  if (number < 2) { return 0 };
  for (let i = 1; i < number; i++) {
    arr.push(i);
  }
  return arr.map(x => x % 3 == 0 || x % 5 == 0 ? x : 0).reduce((x,y) => x + y);
}
