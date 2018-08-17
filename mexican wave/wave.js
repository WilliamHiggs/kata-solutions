function wave(str){
  var output = [];
  
  const stringSplice = (str, index, count, insert) => {
    let ar = str.split('');
    ar.splice(index, count, insert);
    return  ar.join('');
  }
  
  for (let i = 0; i < str.length; i++) {
    let capital = str[i].toUpperCase();
    str[i] !== " " ? output.push(stringSplice(str, i, 1, capital)) : i + 2;
  }
  return output;
}
