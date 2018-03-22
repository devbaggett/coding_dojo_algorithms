// Chapter 6 - Queues and Stacks


// Setting up/Assumptions:


// Function for creating a new node:
function ListNode(value){
	this.val = value;
	this.next = null;
}

// Function for creating a new CirQueue
function CirQueue(cap){
	var head = null;
	var tail = null;
	var capacity = cap;
	var arr = [];
}

// Call to SLQueue function to instantiate a new queue object
myCirQueue = new CirQueue(2);

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
myCirQueue.head = newNode;
myCirQueue.tail = newNode3;


console.log(myCirQueue)