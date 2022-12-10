var stack = require("./stack")

var letters = new stack.Stack();

var word = "Hello";

var reversed_word = "";

//put letters of word into stack
for(var i=0;i<word.length;i++){
    letters.push(word[i]);
}

//get letters in the stack
for(var i=0;i<word.length;i++){
    reversed_word += letters.pop(reversed_word[i]);
}

if(reversed_word === word){
    console.log(word + " is same as " + reversed_word);
}
else{
    console.log(word + " is not same as " + reversed_word);
}

//get size of the word
console.log("The size of the word is " + letters.size(word));

//get last letter of the reversed word 
console.log(letters.lastElement());