// Higher Order Functions II
/*
Overview:
---------
  - Returning functions from functions
  - Closure
*/

/**
 * objective:
 * 
 * feel really comfortable returning function from functions
 * 
 * and most importantly, WHERE/WHEN to invoke them.
 * 
 */

// weird syntax that is still valid
// let greetMe = function () {
  // console.log('Hi!');
// }

//arrow syntax
// greetMe = () => {
//   console.log('Hi!');
// }

// traditional function keyword syntax
// function greetMe() {
//   console.log('Hi!'); // "Hi!" -> console
//   // no return value means that we always return undefined
//   // return undefined
// }

// function getGreeter () {
//   return greetMe(); // return the return val of greetMe -> undefined
// } 

// let greeter = getGreeter(); //return val of getGreeter -> undefined
// // "greetMe"

// console.log(typeof greeter); // undefined
// console.log(greeter); // undefined
// greeter(); // undefined() false() null() 0() "wow"()

// function getGreeter() {
//   // we can declare a new inner function and then return it
//   function greetMe() {
//     // console.log('Heya!');
//     return 'Heya';
//   }

//   return greetMe; // variable name greetMe
//   // 
// }


// let greeter = getGreeter(); // greenter => function greetMe
// // let returnVal = greeter(); 
// console.log("greeter()", greeter());

// console.log("getGreeter()", getGreeter());

// CLOSURE

// let getGreeter
// getGreeter = function () {...}

// closure -> only exists w/ nested functions
// an inner function always has access to any variables defined in an outer function
// this is true at ALL TIMES, even when the outer function has stopped running. 

function getGreeter(name) {
  //let name = whatever is passed in
  console.log('getGreeter is running');

  // let name = 'Marie'; 

  let object = {
    veggie : "lettuce",
    fruit : 'apple', 
  }

  console.log('getGreeter is finishing');

  return function(choice) { // let choice = whatever is passed in
    console.log('Hi', name, " i like ", object[choice]);
  };
}

let greeter = getGreeter(); // let greeter = the return value of getGreeter
/**
 * function() {
 * // ghost let name = "Marie";
 * // ghost let veggie = "lettuce"
 * // ghost let fruit = 'apple'
    console.log('Hi', name);
  };
 */
greeter('veggie');
greeter('fruit');
greeter();
greeter();
greeter();
greeter();
greeter();
