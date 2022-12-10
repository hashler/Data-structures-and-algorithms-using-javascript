var set = require("./sets");

var firstSet = new set.Set();
var secondSet = new set.Set();

var firstWord = "Hello";

var secondWord = "bye";

for(var i = 0;i<firstWord.length;i++){
    firstSet.add(firstWord[i]);
}

for(var i = 0;i<secondWord.length;i++){
    secondSet.add(secondWord[i]);
}

console.log(firstSet.difference(secondSet));