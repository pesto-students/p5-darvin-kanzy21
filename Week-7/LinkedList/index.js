// Construct Single Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make head
        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        //  If index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before index
            count++;
            current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current);
            current = current.next;
        }
    }
    // week 7 exercise 1-> reverse the linked list
    reverseList() {                          //{1,2,3,4}
        // if we use / let previous,next = null/ then the last pointer becomes undefined instead of null. WTF JS!!!
        let previous = null;
        let next = null;
        let current = this.head;            //current = 1, current.next = 2
        while (current) {
            next = current.next;            // current.next = 2, next = 2    
            current.next = previous;        // current.next = null
            previous = current              // previous = 1
            current = next                  // current = 2, next= 2
            // console.log(current.data);
        }
        this.head = previous
        this.printListData()
    }
}

const ll = new LinkedList();


// ------------- Week 7 exercise 1------------- //
console.log('Week 7 exercise 1');
ll.insertFirst(400);
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
console.log('----------Normal Linked list----------')
ll.printListData();
console.log('----------Solution for Reversed Linked list----------')
ll.reverseList();
ll.clearList();

//   ll.insertAt(500, 3);

// ll.clearList();
// ll.getAt(2);

//   ll.printListData();
// ll.reverseList();