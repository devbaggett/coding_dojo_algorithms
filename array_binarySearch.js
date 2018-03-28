// Chapter 7 - Arrays, Part II


// Setting up/Assumptions:

var oddArr = [0,1,2,3,4,5,6,7,8,9,10,11,12]
var evenArr = [-9,-8,-7,-6,-5,-4,-3,-2,-1,0]


// Array: Binary Search

// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate the array.
// Instead, 'divide and conquer', taking advantage of the fact that the array is sorted. As always, only use built-in
// functions that you are prepared to recreate (write yoruself) on demand!

function binarySearch(arr, val){
	var start = 0;
	var end = arr.length - 1;
	var mid;
	// checks if array is valid
	if (arr.length == 0){
		console.log("Invalid array as argument.");
		return false;
	}
	// checks if the argument: val, was satisfied
	if (val == undefined){
		console.log("No val passed as argument.");
		return false;
	}
	while (start <= end){
		// set mid to middle of array
		var mid = Math.floor((start + end)/2);
		// check if mid point is equal to val
		if (arr[mid] == val){
			console.log("Returned val: " + val);
			return true;
		}
		// if val is less than mid point, set end to mid
		else if (val < arr[mid]){
			end = mid - 1;
		}
		// if val is greater than min point, set start to mid
		else if (val > arr[mid]){
			start = mid + 1;
		}
	}
	console.log("No val in array.");
	return false;
}
binarySearch(oddArr, 5);