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


// SList: Length

// July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. 
// Create a function that accepts a pointer to the first list node, and returns n number of nodes in that SList.

function length(list){
	var runner = list.head;
	var count = 0;
	while (runner){
		count ++;
		runner = runner.next;
	}
	return console.log(count);
}

length(myList);