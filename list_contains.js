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
newNode2 = new ListNode("Tad");

// set head to equal newNode (val = 8)
myList.head = newNode;

// set head.next to equal newNode1 (val = 9)
myList.head.next = newNode1;

// chain other nodes together in linked list
newNode.next = newNode1;
newNode1.next = newNode2;


// List: Contains

// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie.
// Given a ListNode pointer and a val, return whether val is found in any node in the list

function contains(list, val){
	var current = list.head;
	while (current){
		if (current.val == val){
			return console.log('true')
		}
		current = current.next;
	}
	return console.log('false');
}

// calls function with myList and value
contains(myList, "Tad");