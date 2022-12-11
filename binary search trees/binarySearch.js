//create a node
class Node {
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearch {
    constructor(){
        this.root = null;   //root is empty
    }

    //add elements in array
    add(data){
        const node = this.root;
        
        if(node === null){
            this.root = new Node(data);
            return;   // return void
        }
        else{
            const searchTree = function(node){
                //check left side
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null){
                        return searchTree(node.left);
                    }
                }
                // check right side
                else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }
                else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    //find elements
    find(data){
        let current = this.root;   //let current be the root node
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current === null){
                return null;
            }
        }
        return current;
    }


    //check whether the element is in the binary search array
    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data){
                return true;
            }
            if(data < current.data){
                current = current.left;
            }
            else{
                current = current.right;
            }
        }
        return false;
    }


    //remove the element
    remove(data){
        const removeNode = function(node,data){
            //check whether the node is empty
            if(node == null){
                return null;
            }
            if(data == node.data){
                //return if the node has no children
                if(node.left == null && node.right == null){
                    return null;
                }
                //return if the node has no left child
                if(node.left == null){
                    return node.right;
                }
                //return if the node has no right child
                if(node.right == null){
                    return node.left;
                }
                //when node has two children
                 return node;    //remove the node of the element
            }
            //check left side
            else if(data < node.data){
                node.left = removeNode(node.left,data);
                return node;    //remove the left node of the element
            }
            //check right side
            else if(data > node.data){
                node.right = removeNode(node.right,data);
                return node;    //remove the right node of the element
            }
        }
        this.root = removeNode(this.root,data);
    }

    /*   Traversal methods    */

    //in order
    inOrder(){
        if(this.root == null){
            return null;
        }
        else{
            var inOrderArray = new Array();   //create a new array for inorder
            function traverserInOrder(node){
                node.left && traverserInOrder(node.left);    //if left side of node exists then go on the left side
                inOrderArray.push(node.data);
                node.right && traverserInOrder(node.right);  //if right side of node exist then go on the right side
            }
            traverserInOrder(this.root);
            return inOrderArray;
        }
    }


    //pre order
    preOrder(){
        if(this.root == null){
            return null;
        }
        else{
            var preOrderArray = new Array();   //create a new array for inorder
            function traverserPreOrder(node){
                preOrderArray.push(node.data);
                node.left && traverserPreOrder(node.left);    //if left side of node exists then go on the left side
                node.right && traverserPreOrder(node.right);  //if right side of node exist then go on the right side
            }
            traverserPreOrder(this.root);
            return preOrderArray;
        }
    }


    //past order
    postOrder(){
        if(this.root == null){
            return null;
        }
        else{
            var postOrderArray = new Array();   //create a new array for inorder
            function traverserPostOrder(node){
                node.left && traverserPostOrder(node.left);    //if left side of node exists then go on the left side
                node.right && traverserPostOrder(node.right);  //if right side of node exist then go on the right side
                postOrderArray.push(node.data);
            }
            traverserPostOrder(this.root);
            return postOrderArray;
        }
    }


    //level order
    levelOrder(){
        let levelOrderArray = [];
        let tempArray = [];   // create a temporary array
        if(this.root != null){
           tempArray.push(this.root);
           while(tempArray.length > 0){
               let node = tempArray.shift();
               levelOrderArray.push(node.data);
               //check the left side
               if(node.left != null){
                   tempArray.push(node.left);
               }
               //then check the right side
               if(node.right != null){
                tempArray.push(node.right);
            }
           }
           return tempArray;
        }
        else{
            return null;
        }
    }
}

module.exports = {
    Node,
    BinarySearch
}