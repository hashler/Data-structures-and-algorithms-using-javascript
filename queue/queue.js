var Queue = function(){

    this.collection = [];
    this.count = -1;

    //add an element to the queue
    this.enqueue = function(element){
        this.collection.push(element);
        ++this.count;
    }

    //print the elements of the queue
    this.print = function(){
        return this.collection;
    }

    //remove first element in the queue
    this.dequeue = function(){
        --this.count;
        return this.collection.shift();
    }

    //return the first element in the queue
    this.front = function(){
        return this.collection[0];
    }

    //return last element in the queue
    this.last = function(){
        return this.collection[this.count];
    }

    //check the queue is empty
    this.isEmpty = function(){
        return (this.count === -1);
    }
}

module.exports = {
    Queue
}