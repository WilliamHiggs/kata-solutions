
function testit(a,b){

  let unique_a = Array.from(new Set(a));
  let unique_b = Array.from(new Set(b));

  return unique_a.concat(unique_b).sort((a, b) => a - b);

}
