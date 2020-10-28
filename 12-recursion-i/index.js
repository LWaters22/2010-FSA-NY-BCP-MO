// Closure Review -- 
// function that returns a function
// the returned function *remembers* where it came from, meaning that it remembers all of the variables that are in its lexial scope where it was defined.

function timesTable(num){
	console.log('timesTable is running with', num)
	// returned function remembers all the stuff in this scope
  function banana(num2){
		console.log('returned function is running with', num, 'and', num2)
    return num * num2;
  }
	return banana;
}

// remembers num
// let times9 = function returnedFunction (num2){
// 		console.log('returned function is running with', num, 'and', num2)
//     return num * num2;
//   }

// let times9 = timesTable(9);
// // let times7 = timesTable(7);

// times9(11)
// times9(5)
// times9(999999)

// let times4 = timesTable(4)
// times4(5)

// console.log(times7(11))

// Recursion


// What is Recursion?
// When a function calls itself!

// Call stack 
// JS is synchronous, single threaded language
// top to bottom, one thing at a time. 


// function hello(){
// 	console.log('hello!');
// 	// nothing will ever happen below a return keyword
// 	// console.log('BLAHL BLAH LBAL')
// 	// return undefined;
// }

// function countDownYo(){
// 	console.log('Counting Down')
// 	hello();
// 	console.log('counting down finishing')
// }

// countDownYo();

// Call Stack
// When you call a function in JS, you must add that function to the call stack.
// When a function finished running, take it off the callstack

/**/

// Recusion needs
	// BASE CASE, how we stop.
	// Recursive, how we recurse.

function countDown(num){
	console.log(num);
	// use recursion, AKA call countdown to log out the correct numbers
	// how do we stopppp?
	// check what number is before we run recursive
	if(num < 1) { // BASE CASE!!!! To stop recursion!!!
		//tell it to stop, or log a message
		console.log('done');
	} else {
		// Recursive case -- the argument needs to be changed to get closer and closer to whatever the base case (stop condition is)
		countDown(num - 1)
	}
	// finish the function outside of the if/else
	// finish running the function
	// return undefined
}

// countDown(3);

// return a value!
// test for the simplest input

function factorial(num) {
	if(num === 1) {
		return 1;
	} else {
		let result = factorial(num - 1); //
		// never been touched
		return num * result;
	}
}


/** callstack -- whatever is on top, is what I'm doing right
 * 
 * 
 * 
 */


console.log(factorial(4))


// 4! 4 * 3 * 2 * 1 => 24
// 3! 3 * 2 * 1     => 6
// 2! 2 * 1         => 2
// 1! 1             => 1
// 0! 							=> 1



















































