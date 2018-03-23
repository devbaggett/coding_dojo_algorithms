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

// Function for creating a new stack
function SLStack(){
	var head = null;
}

// Call to SLStack function to instantiate a new stack object
myStack = new SLStack();

// create 4 new nodes
newNode = new ListNode(8);
newNode1 = new ListNode(9);
newNode2 = new ListNode(10);
newNode3 = new ListNode(11);

// chain other nodes together in linked list
newNode.next = newNode1;
newNode1.next = newNode2;
newNode2.next = newNode3;

// set head of stack to be equal to newNode
myStack.head = newNode;


// **************************************************************************************************************
// **************************************************************************************************************
// Stack: Copy
//
// Given a Stack, create a new second Stack and copy values from first Stack into second Stack, so they pop in same order.
// Use only one Queue for additional storage, and only public Stack/Queue interfaces.
// ************************************************************************************************************** 
// ************************************************************************************************************** 

function stackCopy(stack){
	var myQueue = new SLQueue();
	var stackCopy = new SLStack();
	var tempVal = 0;
	// removes each node in stack and places it in myQueue
	while (stack.head){
		enqueue(myQueue, stackPop(stack));
	}
	// removes each node from queue and places back into queue, only now reversed from original (LIFO vs FIFO)
	while(myQueue.head){
		stackPush(stack, tempVal = dequeue(myQueue));
	}
	// removes each node in stack and places back in myQueue, only now it's reversed
	while (stack.head){
		enqueue(myQueue, stackPop(stack));
	}
	// removes each node from queue back to each stack in original order
	while(myQueue.head){
		// creates a new node with tempVal equal to the node val we are dequeuing
		var myNode = new ListNode(tempVal = dequeue(myQueue));
		// pushes the new node to both the original stack and copy in original order
		stackPush(stack, myNode.val);
		stackPush(stackCopy, myNode.val);
	}
	console.log(stackCopy);
	return stackCopy;
}

stackCopy(myStack)








// ************************************************************************************************************** 
// enqueue, dequeue, push, and pop functions are found below
// ************************************************************************************************************** 

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
		return queue;
	}
	// runs for any # of nodes in queue
	else{
		queue.tail.next = myNode;
		queue.tail = myNode;
		return queue;
	}
}

// SLQueue: Dequeue

// Create SLQueue method dequeue() to remove and return value at front of queue.
// Remember, SLQueue uses singly linked lists (not arrays).

function dequeue(queue){
	// edge case dealing with empty queue
	if (!queue.head){
		return null;
	}
	// edge case dealing with queue of one node
	else if (queue.head == queue.tail){
		var val = queue.head.val;
		queue.head = null;
		queue.tail = null;
		return val;
	}
	// normal logic proceeds for queues of 2 or more nodes
	else {
		var val = queue.head.val;
		queue.head = queue.head.next;
		return val;
	}
}

// Stack: Pop

// Create pop() to remove and return the top val.

function stackPop(stack){
	// checks if stack has a tail
	if (stack.tail){
		return null;
	}
	// checks if stack.head is equal to null, i.e. stack has no head
	else if (!stack.head){
		return null;
	}
	// runs if stack has 1 or more nodes
	else {
		var temp = stack.head;
		stack.head = stack.head.next;
		temp.next = null;
		return temp.val;
	}
}

// Stack: Push

// Create push(val) that adds val to our stack.

function stackPush(stack, val){
	// checks if stack has a tail
	if (stack.tail){
		return null;
	}
	// checks if stack.head is equal to null, i.e. stack has no head
	else if (!stack.head){
		var myNode = new ListNode(val);
		stack.head = myNode;
		return stack;
	}
	// runs if stack has one or more nodes
	else {
		var myNode = new ListNode(val);
		myNode.next = stack.head;
		stack.head = myNode;
		return stack;
	}
}