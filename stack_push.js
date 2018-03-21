// Chapter 6 - Queues and Stacks


// Setting up/Assumptions:


// Function for creating a new node
function ListNode(value){
	this.val = value;
	this.next = null;
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


// Stack: Push

// Create push(val) that adds val to our stack.

function stackPush(stack, val){
	// checks if stack has a tail
	if (stack.tail){
		console.log("Stack cannot have a tail");
		return null;
	}
	// checks if stack.head is equal to null, i.e. stack has no head
	else if (!stack.head){
		var myNode = new ListNode(val);
		stack.head = myNode;
		console.log(stack);
		return stack;
	}
	// runs if stack has one or more nodes
	else {
		var myNode = new ListNode(val);
		myNode.next = stack.head;
		stack.head = myNode;
		console.log(stack);
		return stack;
	}
}

stackPush(myStack, "new node");