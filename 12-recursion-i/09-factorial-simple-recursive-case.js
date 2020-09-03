// should return a number
function factorial(num) {
  // base case: num is 0 or 1
  if (num === 0 || num === 1) {
    return 1;
  }
  // recursive case: num must get closer to 0 or 1
  // TODO

  const prevFactorial = factorial(num - 1);// factorial(1)
  // prevFactorial = 1
  // 2 * 1; 
  // 2
  console.log(num * prevFactorial);
  return num * prevFactorial;
}

/* 
it's best to write your recursive case using the simplest possible input that will result in a recursive call

TODO: finish recursive step
*/
let result = factorial(2); // 

/* 
as a reminder:
0! === 1
1! === 1
2! === 2 (2 * 1) =  2 * 1!
3! === 6 (3 * 2 * 1) = 3 * 2!
4! === 24 (4 * 3 * 2 * 1) = 4 * 3!
5! === 120 (5 * 4 * 3 * 2 * 1) 

*/

console.log(result);