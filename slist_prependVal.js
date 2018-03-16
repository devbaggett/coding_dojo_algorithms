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


// SList: Prepend Val

// Create prependVal(list, val, target) to insert a new ListNode with val immediately before 
// the node containing target (or at end, if no node contains target). Return the new list.

function prependVal(list, val, target){
	var myNode = new ListNode(val);
	var previous = list.head;
	var runner = list.head;
	// make sure slist isn't empty
	if (list.head){
		// if target val of node is first/only node in list, myNode becomes new list.head
		if (list.head.val == target){
			myNode.next = runner;
			list.head = myNode;
			// shows node was successfully added at beginning of list
			console.log(list);
			return list;
		}
		else{
			while (runner.next){
				// runs if target isn't first or only node in list
				if (runner.next.val == target){
					myNode.next = runner.next;
					// if not first iteration/traversal
					if (previous != runner){
						previous.next.next = myNode;
					}
					// first iteration/traversal edge case where previous is equal to runner
					else{
						previous.next = myNode;
					}
					// shows that node was successfully added at end of list
					console.log(previous.next);
					return list;
				}
				previous = runner;
				// sets runner to be one step ahead of previous variable to aid in traversal
				runner = runner.next;
			}
			// runs subsequent code when target does not exist in list, appending new node (myNode) to end of list instead
			runner.next = myNode;
			// shows that node was successfully added at end of list
			console.log(runner);
			return list;
		}
	}
	else{
		console.log("List cannot be empty");
		return false;
	}
}
// prepends at beginning of list, essentially becoming new head
prependVal(myList, "newNode", 8);

// prepends before each of the target values
prependVal(myList, "newNode", 9);
prependVal(myList, "newNode", 10);
prependVal(myList, "newNode", 11);

// target (12) not in list, so appends at end of list in this case
prependVal(myList, "newNode", 12);