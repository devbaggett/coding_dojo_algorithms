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


// SList: Remove Val

// Create removeVal(list, val). Given a pointer to the head ListNode, remove the node with the given val.
// Return the new list. What will you do if val is not found?

// function removeVal(list, val){
// 	var runner = list.head;
// 	var previous = runner;

// 	while (runner){

// 		if (runner.val == val){
// 			console.log(runner)
// 			previous.val = runner.next;
			
// 			return console.log(list.head);
// 		}
		
// 		runner = runner.next;
// 		previous = runner;
// 	}
// }

// removeVal(myList, 10)

function removeVal(list, val){
	var runner = list.head;
	var previous;

	while (runner.next){

		if (runner.val == val){
			console.log(runner)
			previous.next = runner.next;
			return console.log(list.head);
		}
		
		runner = runner.next;
		previous = runner;
	}
}

removeVal(myList, 10)