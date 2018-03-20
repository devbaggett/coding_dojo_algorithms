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



// SLQueue: Enqueue

// Create SLQueue method enqueue(val) to add the given value to the end of our queue.
// Remember, SLQueue uses a singly linked list (not an array).

function enqueue(queue, val){
	// create new node with val equal to val
	var myNode = new ListNode(val);
	// checks if the queue even has a node
	if (queue.head == null){
		queue.head = myNode;
		queue.tail = myNode;
		console.log(queue);
		return queue;
	}
	// runs for any # of nodes in queue
	else{
		queue.tail.next = myNode;
		queue.tail = myNode;
		console.log(queue);
		return queue;
	}
}

// call to function with following args
enqueue(myQueue, 5)