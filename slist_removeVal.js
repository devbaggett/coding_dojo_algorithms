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


// SList: Remove Val

// Create removeVal(list, val). Given a pointer to the head ListNode, remove the node with the given val.
// Return the new list. What will you do if val is not found?

function removeVal(list, val){
	var runner = list.head;
	var previous = list.head;
	// make sure slist isn't empty
	if (list.head){
		previous = runner;
		while (runner){
			// check if value at head is equal to val being removed and if it is the first node
			if (list.head.val == val){
				list.head = list.head.next;
				console.log("First node (" + val + ") successfully removed")
				return console.log(list);
			}
			else if (runner.val == val){
				previous.next = runner.next;
				return console.log(list);
			}
			previous = runner;
			runner = runner.next;
		}
		// if node (val) is not found
		return false;
	}
	else{
		return console.log("List head can't be null")
	}
}

removeVal(myList, 9)