class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        // const newNode = new Node(value)
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }  else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this 
    }

    
}


const myLinkedList = new LinkedList(7)
myLinkedList.push(4)
myLinkedList.push(5)



console.log(myLinkedList)