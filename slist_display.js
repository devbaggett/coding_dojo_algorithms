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


// SList: Display

// Create display(list) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!

function display(list){
	var runner = list.head;
	var displayList = [];
	while (runner){
		displayList.push(runner.val);
		runner = runner.next;
	}
	console.log(displayList.join());
	return displayList.join();
}

display(myList);


