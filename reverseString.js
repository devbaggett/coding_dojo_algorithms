// Chapter 4 - Strings and Associative Arrays


// String: Reverse

// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

function reverseString(str){
	var newStr = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	console.log(newStr)
	return newStr;
}

var myStr = "creature";

reverseString(myStr);

