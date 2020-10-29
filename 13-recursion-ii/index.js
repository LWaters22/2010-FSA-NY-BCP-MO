/**
 * objective:
 * 
 */

/**
 *  outline:  
 * - Nested data structures and recursion
 * - Nested arrays
 * - Nested objects
 * 
 */

/**
 * notes on recursion summary
 * 
 * recursion: when you call a function within itself
 * 
 * 2 cases:
 * base case - solves the problem the most basic level
 * recursion case
 *  loop (run) recursive case until base case is met
 *  what calls itself
 * 
 * return vals:
 * have to make sure that return of base case (and recursive case) works w/ what you want to return in the end -> datatype and also is a value that can be  used by the recursive case to build up to the eventual "final return"
 * 
 * link to scope is most closely related to callstack
 * 
 * to keep in mind while WRITING your func
 * 
 * if (you want to return something from the function) {
 * you must return something from the base case
 * AND ALSO the recursive case
 * }
 * 
 * on recursive call MUST pass in argument that approaches base case
 * 
 */

// function countDown(num) {
//   //base case
//   if (num <= 0) {
//     console.log(num);
//   } else {
//     console.log(num);
//     countDown(num-1) // recursive call
//   }

// }

// nested arrays with for loops

// if I want to console.log out all of these names, how would I do that?


// nested arrays with recursion
// base case
// recursive case
// return val needs to be useable (if returning)
// modifying argument of recursive call to approach base case

// let rsvpGroups = [['Jane', 'Mel'], 'Jack', ['Rohan', 'David', 'Meg']];

// // recurseRsvp(rsvpGroups);

// //goal: console.log the names
// function recurseRsvp(arr) { //know that it will be array
//   for (let i = 0 ; i < arr.length; i++) {
//     let curElem = arr[i];

//     if (Array.isArray(curElem)) { // -> recursive case
//       recurseRsvp(curElem);
//     } else { // -> base case
//       console.log(curElem);
//     }
//   }
// }

// function iterateRsvp() {
//   for (let i = 0; i < rsvpGroups.length; i++) {
//     let curElem = rsvpGroups[i];
//     if (Array.isArray(curElem)) { // ->
//       for (let j = 0; j < curElem.length; j++) {
//         let curInnerElem = curElem[j];
//         console.log(curInnerElem);
//       }
//     } else { // ->
//       console.log(curElem);
//     }
//   }
// }

// // pattern you see with "iterable"s - strings, arrays 

// // base case => array is empty OR length 1, string is empty or length 1




// // if I want to console.log out all of these names, how would I do that?
// function iterateObj(obj) {
//   for (let x in obj) {
//     let curElem = obj[x];
//     if (typeof curElem === "object") {

//       for (let y in curElem) {
//         console.log(curElem[y]);
//       }

//     } else {
//       console.log(curElem);
//     }
//   }
// }

// // iterateObj(rsvpGroupsObj);

// // nested objects with for loops
// let rsvpGroupsObj = {
//   group1: {
//     person : 'Jane',
//     puppy : 'Mel',
//   },
//   group2: {
//     person : 'Jack',
//   }
// }

// nested objects with recursion
/**
 * our simplest case was:
 * 
 * {
 *  name1: "jane",
 *  name2: "mel",
 * }
 */


// // nested objects with for loops
// let rsvpGroupsObj = {
//   group1: {
//     person : 'Jane',
//     puppy : 'Mel',
//   },
//   group2: {
//     person : 'Jack',
//   }
// }

// function recurseObj(obj) {

//   for (let x in obj) {
//     let curElem = obj[x];
//     // base case: in key/value pair, the value is NOT an object
//     if (typeof curElem !== "object") { 
//       // curElem -> string
//       console.log(curElem);

//     // recursive case: in key/value pair, the value IS an object
//     } else { // tyeof curElem === "object"
//       // curElem -> object
//       recurseObj(curElem);

//     }
//   }

// }

// recurseObj(rsvpGroupsObj)


//=> 0 returns as NaN
console.log(countVowels("facefAAAAce")) // -> 2

function countVowels(string){
  
  let allVowels = 'aeiouAEIOU';
  
  if(string.length === 1){
     if(allVowels.includes(string[0])){
       return 1;
     } else return 0;       
    
  } else{
    
    if(allVowels.includes(string[string.length -1])){
      return countVowels(string.slice(0, -1)) + 1;
    } 
    else return countVowels(string.slice(0, -1));
  }
}
