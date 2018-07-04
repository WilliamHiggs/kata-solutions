function twoSum(numbers, target) {
  let map = [];
  let indexs = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]] != null) {
      let index = map[numbers[i]];
      indexs[0] = index;
      indexs[1] = i;
      break;
    } else {
      map[target - numbers[i]] = i;
    }
  }
  return indexs;
}