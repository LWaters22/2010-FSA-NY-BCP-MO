/* 
  write a function that counts down to 1 
  https://goo.gl/EQ3cPK
*/
// function countdown(num) {

//   for (let i = num; i >= 1; i--) {
//     console.log(i);
//   }

// }


function countdown (num) {
  while (num >= 1) {
    console.log(num);
    num--;
  }
}

countdown(5);
