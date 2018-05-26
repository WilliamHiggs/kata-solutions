
function abbrevName(name){

   var firstChar = x => splits[x].slice(0, 1).toUpperCase();
   var splits = name.split(' ', 2);
   var firstName = firstChar(0);
   var secondName = firstChar(1);

   return firstName + "." + secondName;

}
