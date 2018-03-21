// Chapter 6 - Queues and Stacks


// Setting up/Assumptions:


// Function for creating a new node:
function ListNode(value){
	this.val = value;
	this.next = null;
}

// Function for creating a new queue:
function SLQueue(){
	var head = null;
	var tail = null;
}

// Call to SLQueue function to instantiate a new queue object
myQueue = new SLQueue();

// create 4 new nodes
newNode = new ListNode(8);
newNode1 = new ListNode(9);
newNode2 = new ListNode(10);
newNode3 = new ListNode(11);

// chain other nodes together in linked list
newNode.next = newNode1;
newNode1.next = newNode2;
newNode2.next = newNode3;

// set head/tail of queue to be equal to newNode/newNode3 respectively
myQueue.head = newNode;
myQueue.tail = newNode3;

// console.log(myQueue)


// SLQueue: Dequeue

// Create SLQueue method dequeue() to remove and return value at front of queue.
// Remember, SLQueue uses singly linked lists (not arrays).

function dequeue(queue){
	if (queue == null){
		console.log("empty queue");
		return null;
	}
	else if (queue.head == queue.tail){
		var val = queue.head.val;
		queue.head = null;
		queue.tail = null;
		console.log("Queue had only one node. Queue is empty now.");
		console.log(queue);
		return val;
	}
	else {
		var val = queue.head.val;
		queue.head = queue.head.next;
		console.log("Updated queue: ", queue);
		console.log("Val: ", val);
		return val;
	}
}

dequeue(myQueue);