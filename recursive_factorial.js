// Chapter 9 - Recursion


// Recursive Factorial

// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not integer, truncate.

function rFactorial(num){
	if (num < 1){
		return 1;
	}
	else{
		return num * rFactorial(num - 1);
	}
}

console.log(rFactorial(5))