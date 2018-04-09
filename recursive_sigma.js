// CHapter 9 - Recursion

// Recursive Sigma

// Write a recursive function that given a number returns sum of integers from 1 to that number.

function rSigma(num){
	if (num < 1){
		return 0;
	}
	else{
		return num + rSigma(num - 1);
	}
}

// function call will return 15 (5+4+3+2+1)
console.log(rSigma(5));