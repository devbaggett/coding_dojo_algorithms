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

// create 4 new nodes
newNode = new ListNode(8);
newNode1 = new ListNode(9);
newNode2 = new ListNode(10);
newNode3 = new ListNode(11);

// set head to equal newNode (val = 8)
myList.head = newNode;

// chain other nodes together in linked list
newNode.next = newNode1;
newNode1.next = newNode2;
newNode2.next = newNode3;



function reverse(list){
	var first = list.head;
	var second = first.next;
	// first
	var temp = second.next;
	second.next = first;
	first = second;
	second = temp;
	// second
	temp = second.next;
	second.next = first;
	first = second;
	second = temp;
	// third
	temp = second.next;
	second.next = first;
	first = second;
	second = temp;
	// break loop
	list.head.next = null;
	list.head = first;
	console.log(list.head.next)
}

reverse(myList);