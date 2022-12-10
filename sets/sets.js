var Set = function(){
    this.collection = []; //the set of elements

    //check the presence of an element
    this.has = function(element){
        return (
            this.collection.indexOf(element) !== -1  // -1 if it is not present
        );
    }

    //return all values of the set
    this.values = function(){
        return this.collection;
    }

    //add an element to the set
    this.add = function(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    }

    //remove an element of a set
    this.remove = function(element){
        if(this.has(element)){
            var index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    }

    //return the size of collection
    this.size = function(){
        return this.collection.length;
    }

    //return the combined set including first set and second set
    this.combined = function(newSet){
        var combinedSet = new Set();
        var firstSet = this.values();
        var secondSet = newSet.values();
        firstSet.forEach(function(item){
            combinedSet.add(item);
        });
        secondSet.forEach(function(item){
            combinedSet.add(item);
        });
        return combinedSet;
    }

    //return the same values of two sets as a new set
    this.interSection = function(newSet){
        var interSectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(item){
            if(newSet.has(item)){
                interSectionSet.add(item);
            }
        });
        return interSectionSet;
    }

    //return the difference of two sets [first set - second set] as a new set
    this.difference = function(newSet){
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function(item){
            if(!newSet.has(item)){
                differenceSet.add(item);
            }
        });
        return differenceSet;
    }

    //test if the set is a subset of a different set
    this.subset = function(newSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return newSet.has(value);
        });
    }
}


module.exports = {
    Set
}