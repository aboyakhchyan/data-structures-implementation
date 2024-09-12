// HashTable

class HashTable {
    keys = []
    values = []

    constructor(size) {
        this.size = size

    }

    retrieve(key) {
        let hash = this.#hash(key)

        return this.values[hash]
    }

    put(key, value) {
        let hash = this.#hash(key)

        this.keys[hash] = key
        this.values[hash] = value
    }


    #hash(key) {
        let s = 0

        for(let c of key) {
            s += c.charCodeAt(0)
        }
        return s%this.size
    }
}



const twoSum = (nums) => {

    const cache = {}

    return function (target) {

        if(cache[target]) {
            return cache[target]
        }

        console.log('waiting...')

        for(let i = 0; i < nums.keys.length; i++) {
            for(let j = 0; j < nums.keys.length; j++) {
                if(nums.values[i] + nums.values[j] == target) {
                    cache[target] = [nums.keys[i], nums.keys[j]]
                    return cache[target]
                }
            }
        }

        return null

    }
}





// DoublyLinkedList


class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    head = null
    tail = null
    size = 0


    insertAtHead(value) {
        let node = new Node(value)

        if(this.tail == null) {
            this.head = node
            this.tail = node
        }else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    insertAtTail(value) {
        let node = new Node(value)

        if(this.tail == null) {
            this.head = node
            this.tail = node
        }else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    deleteAtHead() {
        let result = null

        if(this.head !== null) {
             result = this.head.value

            if(this.head == this.tail) {
                this.head == null
                this.tail = null
            }else {
                this.head = this.head.next
                this.head.prev = null
            }
        }
        this.size--
        return result
    }

    deleteAtTail() {
        let result = null

        if(this.head !== null) {
             result = this.tail.value

            if(this.head == this.null) {
                this.head = null
                this.tail = null
            }else {
                this.tail = this.tail.prev
                this.tail.next = null
            }
        }
        this.size--
        return result
    }

}


// BinarySearchTree


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root = null

    insert(value) {
        let node = new Node(value)

        if(!this.root) {
            this.root = node
            return
        }

        let current = this.root

        while(true) {
            if(value < current.value) {
                if(current.left == null) {
                    current.left = node
                    return
                }
                current = current.left
            }else {
                if(current.right == null) {
                    current.right = node
                    return
                }
                current = current.right
            }
        }
    }



    inOrderTraverse(node = this.root) {
        if (node !== null) {
            this.inOrderTraverse(node.left)  
            console.log(node.value)          
            this.inOrderTraverse(node.right) 
        }
    }
}

