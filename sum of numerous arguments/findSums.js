
function findSum() {

  let args = Array.from(arguments);

  for (var i = 0; i < args.length; i++) {

    if (args[i] < 0) {
      args = "-1";
    } else if (args.length == 1 && args[i] == 0) {
      args = "0";
    }
  }

  return args.length == 0 ? 0 : args == "-1" ? -1 : args == "0" ? 0 : args.reduce((x,y) => x + y);
}
