function spinWords(words){
  let wordsArr = words.split(" ");
  return wordsArr.map(x => x.length >= 5 ? x.split("").reverse().join("") : x).join(" ");
}
