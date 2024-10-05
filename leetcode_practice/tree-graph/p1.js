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

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null)  this.root = newNode
        
        let temp = this.root;

        while(true) {
            if (newNode.value === temp.value) return undefined;
            
            if (newNode.value < temp.value) { //if the node is lest than the temp node, then the temp will 
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    console.log(temp.right)
                    return this
                }
                temp = temp.right
            }
        }
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



