class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    

    BFS () {
        let current = this.root;
        let queue = [];  //first in first out
        let result = [];

        queue.push(current);

        while (queue.length) {  //if the lenght of queue is greater than zero
            current = queue.shift(); //set the current node to be the first node in queue
            result.push(current.value);  //put the current node in result
            if (current.left) {  //check if there is left node, then push it to queue
                queue.push(current.left)
            }
            if (current.right) { //check if there is right node, then push it to queue
                queue.push(current.right)
            }
        }

        return result
    }

    DFS_preOrder() {
        let result = [];
        function travesal(node) {
            result.push(node.value)
            if (node.left) travesal(node.left)
            if (node.right) travesal(node.right)
        }
        travesal(this.root)
        return result
    }

    DFS_postOrder() {
        let result = [];
        function travesal(node) {
            if (node.left) travesal(node.left)
            if (node.right) travesal(node.right)
            result.push(node.value)
        }
        travesal(this.root)
        return result
    }

    DFS_inOrder() {
        let result = [];
        function travesal(node) {
            if (node.left) travesal(node.left)
            result.push(node.value)
            if (node.right) travesal(node.right)
        }
        travesal(this.root)
        return result
    }
}

const myTree = new BST()
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

//       47
//     /    \
//    21    76
//   / \    / \
//  18 27  52 82

//pre [ 47, 21, 18, 27, 76, 52, 82 ]

console.log(myTree.DFS_postOrder())



