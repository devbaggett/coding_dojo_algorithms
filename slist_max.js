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


// SList: Max

// American Idol seems to air singers that are the best, and a few that seem like the worst!
// Create function max(list) to return list's largest value.

function max(list){
	var max = list.head.val;
	var runner = list.head;
	while (runner){
		if (max < runner.val){
			max = runner.val;
		}
		runner = runner.next;
	}
	console.log(max);
	return max;
}

// returns 10, the highest value in myList
max(myList);