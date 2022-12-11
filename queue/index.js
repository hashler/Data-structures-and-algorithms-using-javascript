const queue = require("./queue");

var bankQueue = new queue.Queue;

var word = "word";

for(var i = 0;i<word.length;i++){
    bankQueue.enqueue(word[i]);
}

console.log(bankQueue.dequeue());
console.log(bankQueue.print());