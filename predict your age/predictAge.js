
const predictAge = (...arguments) => {

  var args = Array.from(arguments);

  const multiplyBySelf = (args) => args.map(x => x * x);

  const addAll = (args) => args.reduce((x, y) => x + y );

  const sqrNDivide = (args) => Math.sqrt(args) / 2;

  return Math.floor(sqrNDivide(addAll(multiplyBySelf(args))));

}
