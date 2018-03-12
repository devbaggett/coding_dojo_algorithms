// Chapter 4 - Strings and Associative Arrays


// Parens Valid

// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid. 
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true.
// Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t)0_(_k", return false,
// because the underscored "(" is premature: there is nothing open for it to close.

var myStr = "Y(3(p)p(3)r)s";
var myStr1 = "N(0(p)3";
var myStr2 = "N(0)t)0_(_k";

function parensValid(str){
	var open = 0;
	var closed = 0;
	for (var i = 0; i < str.length; i++){
		if (str[i] == "("){
			open++;
		}
		else if (str[i] == ")"){
			closed++;
		}
		if (closed > open) {
			console.log("false")
			return false;
		}
	}
	console.log(open == closed);
	return open == closed;
}

parensValid(myStr2);