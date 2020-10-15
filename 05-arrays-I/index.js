/*
Overview:
/*
- what's an array?
- typeof []
- Array.isArray
- bracket access, bracket assignment
- .length property
- basic methods
*/


/**
 * Objective: 
 * 
 */

// console.log(typeof ['a', 'b']) // -> object

// cycling thru string
let str = 'abc'
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }
// can even think of a string as an array of characters

// str[0] = "b";
// console.log(str);

// let names = ['George', 'John', 5];

// let jefferson = names.pop(); //-> JUST the element
// let jefferson = names[2]
// get RID of last element (delete names[2])

// console.log(Array.isArray(names));
// console.log(typeof jefferson);


// let subStr = str.slice(0, str.length) //starting idx, ending idx (noninclusive)
// console.log(str);
// console.log(subStr);


// let names = ['George', 'John', 'Thomas', 'paul', 'ringo', 'lucy', 'sadie'];

// let oneTermPresidents = names.slice(1, 2);

// console.log(oneTermPresidents);
// console.log(names);

// for loop structure

// according to README, what is a super simple version
// of what the function has to return vs console.log?

// let meat = ['']; // let x = "value"
// let potatoes = [''];

// function oddCouple (num){ //[. . . . . . . (20000)]
// // successful loop, that walks thru whole array
//   for (let i = 0; i < num.length; i++){
//     /**
//      * let i = 0;
//      * if (i < 20,000) { 
//      *  // run the code
//      * }
//      * i = i + 1; 19,999 
//      */
//     // successful if statement that decids
//     if (num[i]%2 != 0){ // when num[i] is odd
//       meat.push[''];
//       // todo: what do I want to do when num[i] is odd?
//       // console.log something?
//     }
//     else { // otherwise, when num[i] is even
//       potatoes.push[''];
//       // todo: what do I want to do when num[i] is even?
//       // console.log something?
//    }
//   }
//   return [potatoes]
// }

// console.log(oddCouple([1, 2, 3]))

