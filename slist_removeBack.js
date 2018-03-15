// Chapter 5 - Linked Lists


// Setting up/Assumptions:


// Function for creating a new node:
function ListNode(value){
	this.val = value;
	this.next = null;
}

// Function for creating a new list:
function List(){
	this.head = null;
}

// Call to list function to instantiate a new list object
myList = new List();

// create 3 new nodes
newNode = new ListNode(8);
newNode1 = new ListNode(9);
newNode2 = new ListNode(10);

// set head to equal newNode (val = 8)
myList.head = newNode;

// chain other nodes together in linked list
newNode.next = newNode1;
newNode1.next = newNode2;


// SList: Remove Back
// Create a standalone function that removes the last ListNode in the list and returns a new list

function removeBack(list){
	var runner = list.head;
	var previous;
	while (runner.next){
		previous = runner;
		runner = runner.next;
	}
	previous.next = null;
	console.log(list);
	return list;
}

removeBack(myList);