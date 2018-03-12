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



// List: Remove Front

// Ha! Rudy is getting what he deserves - kicked out of line. Given a pointer to the first node in a list, 
// remove th head node and return the new list head node. If list is empty, return null.

function removeFront(value){
	
}