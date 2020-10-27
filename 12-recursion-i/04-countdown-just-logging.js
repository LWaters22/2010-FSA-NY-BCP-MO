/* 

let's refactor our solution, writing a function that takes a number and and logs it out 
*/

function countdown(num) {
  console.log(num);
}

countdown(5); 
// log out 5 then call countdown(4)
countdown(4);
//
countdown(3);
countdown(2); // notice, no loops!
countdown(1); // how do the arguments change between calls?