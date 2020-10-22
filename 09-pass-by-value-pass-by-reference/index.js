//Overview
/*
  - Primitive vs. complex types
  - Variable assignment
  - Passing values into functions
  - Equality operators and PBV/PBR
  - Arrays and .slice
*/

// PBR Pass By Reference
// PBV Pass By values


/**
 * Primitive!
 * string
 * number
 * boolean
 * null
 * undefined
 * NaN 
 * 
 * Complex
 * Objects => also arrays!
 * functions
 */

// Primitives are cheap, free! 
// Complex types, One of a Kind, Unique, expensive


let num = 7;
let nextNum = num;
num++

// console.log('num', num)
// console.log('nextNum',nextNum)



// address 109 : {num: 7}

let numObj = {num: 7} // address 109
// Complex type! I will set aside some memory for you 
// at address 109 to put {num: 7}
let nextNumObj = numObj // address 109;
numObj.num++

// console.log('numObj', numObj) // the value at address 109)
// console.log('nextNumObj', nextNumObj) // the value at address 109)

// let favNum = 10

// function add(num1, num2) {
// 	 num1 = num1 + num2;
// 	 return num1
// }

// console.log('call',add(favNum, 5));
// console.log('favNum',favNum);


let favNumArr = [10] // address 54
// Complex type!!! 
// I'll make some memory for this val of [10]
// at address 54

function adder(numArr, num) {
	//numArr is the val at address 54
	numArr[0] = numArr[0] + num
	return numArr; // address 54
}

// console.log('call',(adder(favNumArr /*address 54*/, 5)))
// console.log('favNumArr',favNumArr /*address 54*/)



let arr = [1,2,3];
let arr2 = arr;

arr.push(4)
// console.log(arr2)

let pug = 10;
let num2 = pug;

pug++
// console.log(num2)

let names = ['Hermione']; // address 1

function takesComplexTypes(arr) {
	arr.push('Russell');
}


takesComplexTypes(names /*address 1*/)
// console.log(names);

let spookyCopyFake = ['Hermione', 'Russell']; // address 2
let spookyCopy = names; // address 1 

// console.log(spookyCopy /*address 1*/ === names /*address 1*/)

// Equality of complex types by reference only!

let oniNum = 5;
let andriaNum = 5;

// equality of primitives is by value
// console.log(oniNum === andriaNum)


let willNum = [8] // address 1
let williamNum = [8]; // address 2

// console.log(willNum[0] === williamNum[0])


let bulls = ['MJ', 'Scottie', /*address 1*/['Kerr']];
let bullsCopy = bulls.slice() // returns an array that is a shallow copy. Make a copy of all primitives in bulls.  

bulls[2].pop(); // address 3
console.log(bulls)
console.log(bullsCopy)
console.log(bullsCopy[2] === bulls[2])




















































