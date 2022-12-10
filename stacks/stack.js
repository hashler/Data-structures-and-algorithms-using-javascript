var Stack = function(){
    this.count = 0; //number of elements in the stack
    this.storage = {}; //the array of elements

    //add a value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //removes and returns the value at the end of the stack
    this.pop = function(element){
        if(this.count === 0){
            return undefined;
        }

        this.count--; 
        element = this.storage[this.count];
        delete this.storage[this.count];
        return element;
    }

    //return the length of the stack
    this.size = function(){
        return this.count;
    }

    //return the value at the end of the stack
    this.lastElement = function(){
        return this.storage[this.count - 1];
    }
}

module.exports = {
    Stack
};
