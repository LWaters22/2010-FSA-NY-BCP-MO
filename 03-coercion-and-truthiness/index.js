/** */

/** objective: 
 * 
 * Datatypes
 * 
 * Coercion
 * 
 * Truthiness -> specialized coercion
 * 
 * Some cool operators
 */

// console.log(typeof undefined); // type -> number
// console.log(typeof String(2)); // Number() Boolean()

// let sum = 10 + 20;

// let concatenatedString = '10' + '20';

// let notSure = 10 + '20'; // will this throw an error? return a value?

// console.log(notSure)


// let notSure = 10 + Number(true); // Bpplean -> Number
// console.log(notSure);

// Truthiness -> Boolean(anything)
// if returns true -> Truthey
// if returns false -> Falsey

// Truthey
// []
// {}
// "f"
// non 0 number
// true
// Symbols

// Falsey
// 0
// NaN
// ""
// false
// undefined
// null


/**
 * ! operator -> "not"
 * !! operator -> "not" "not" (forces Boolean)
 * 
 * logical operators
 * && -> logical AND
 * || -> logical OR
 * 
 */

// let condition = 0; // -> falsey
// let condition2 = true;
// let condition3 = false;
// let condition4 = false;


// if (condition || condition2 || condition3 || condition4){
//   console.log("inside if statement")
// } else {
//   console.log("inside else statement")
// }

// Real world conditional rendering example

// function answerIsYes() {
//   // return true or false
// }

// function renderTheThing() {

// }

// if (answerContent.length) {
//   renderTheThing();
// }

// if ((yesDog || yesCat || yesParekeet) && yesWantToTry ) {
//   doYouWantDelivered
// }

let tyepOfTheThing = typeof false;
console.log(typeof tyepOfTheThing)