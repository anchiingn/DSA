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

    print() {
        let curr = this.head;
        let output = ''
        while(curr) {
            output += `${curr.value} -> `
            curr = curr.next
        }
        output += 'null'
        return output   // 1 -> 2 -> 3 -> 4 -> 5 -> null
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        this.tail = this.head

        while(curr) {
            let next = curr.next  // 2  // 3  // 4  // 5  //null
            curr.next = prev;   //  1 -> null  // 2 -> 1  // 3 -> 2  // 4 -> 3  // 5 -> 4
            prev = curr; // 1  // 2  // 3  // 4  // 5 this is the current node
            curr = next  // 2  // 3  // 4  // 5  //null so this will stop the loop 


        }
        this.head = prev  //the head will be the current node so it will be 5 -> 4 -> 3 -> 2 -> 1 -> null
    }
}


const myLinkedList = new LinkedList()
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)

// myLinkedList.print()

myLinkedList.reverse()


console.log(myLinkedList.print())