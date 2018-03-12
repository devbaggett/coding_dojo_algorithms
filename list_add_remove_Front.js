// Chapter 5 - Linked Lists


// Assumptions:

// Function for creating a new node:
function listNode(value){
	this.val = value;
	this.next = null;
}

// Function for creating a new list:
function list(){
	this.head = null;
}

// Call to list function to instantiate a new list object
newSLL = new list();

// give the head a value of 7
newSLL.head = 7;


// List: Add Front

// Rudy isn't nice: he cuts in line in front of everyone else. Given a pointer to the first listNode and a value, 
// create a new node, assign it to the list head, and return a pointer to the new head node.

function addFront(sll, value){
	var newNode = new listNode(value);
	if (sll.head != null){
		newNode.next = sll.head;
		sll.head = newNode;
	}
	else {
		sll.head = newNode;
	}
	console.log(sll.head);
}

addFront(newSLL, "Rudy");


// List: Remove Front

// Ha! Rudy is getting what he deserves - kicked out of line. Given a pointer to the first node in a list, 
// remove th head node and return the new list head node. If list is empty, return null.

function removeFront(sll){
	if(sll.head){
		sll.head = sll.head.next;
	}
	else{
		return null;
	}
	console.log(newSLL);
}

removeFront(newSLL);