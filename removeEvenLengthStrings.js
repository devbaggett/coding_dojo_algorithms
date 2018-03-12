// Chapter 4 - Strings and Associative Arrays p. 51


// Remove Even-Length Strings

// Build a standalone function to remove strings of even lengths from a given array. For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that 
// same array to ["Nope!","Its","Chris","."].

var myArr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];

function removeEvenLengthStrings(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length % 2 == 0){
			for (var j = i; j < arr.length; j++){
				arr[j] = arr[j + 1];
			}
			i = i - 1;
			arr.pop();
		}
	}
	console.log(arr);
}

removeEvenLengthStrings(myArr);


