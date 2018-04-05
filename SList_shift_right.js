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



// SList: Shift Right

// Given a list, shift nodes to the right, by a given number shiftBy. These shifts are circular: 
// when shifting a node off list's end, it reappears at list's start. For list a=>b=>c, shift(1) 
// should return c=>a=>b.


// Second: also handle negative shiftBy (to left).


function shiftRight(list, shiftBy){
	var pre = list.head;
	var runner = pre.next;
	for (var i = 0; i < shiftBy; i ++){
		while(runner.next){
			pre = runner;
			runner = runner.next
		}
		runner.next = list.head;
		pre.next = null;
		list.head = runner;
	}
	console.log(myList)
}