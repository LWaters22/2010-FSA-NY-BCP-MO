/* 

that started off so promisingly!

because our function was instructed to call itself every time, the function ends up calling itself forever until our computer runs out of memory


First thing we have to do is recognize our `stop condition` other wise known as our base case. This is when we want the function to STOP
calling itself.

In this example what would our stop condition be??

let's write in a stop condition so the function eventually stops calling itself 


https://goo.gl/EpNPCt

*/


// function countdown(num) {
//   console.log(num);
//   // stop condition, base condition
//   if (num <= 0) {
//     console.log('done');
//     return;
//   }
//   countdown(num - 1);

// }

// countdown(5);



/* two takeaways from countdown: */

/* 1. you need to define a base case! */
/* 2. your recursive case must change the input to the function so that you will eventually trigger the base case! */

/*

really quickly lets compare the iterative and recursive version:

iterative:
function countdown(num) {

  while (true) {
    // base case AKA stopping case
    if (num < 1) {
      console.log('done');
      break;
    } else  {
      console.log(num);
      --num;
    }
  }
}


recursive:
function countdown(num) {
  // base condition
  if (num < 1) {
    console.log('done!');
  }
  // here's our 'recursive case'
  else {
    console.log(num);
    countdown(num - 1); 
  }
}


/*/

// use this value, and then decrement it by one
// num--

// decrement by one and then use this value
// --num

// let num1 =  100;
// let num2 =  100;

// console.log(--num1); // 99
// console.log(num2--);  // 100


// console.log(num1); // 99
// console.log(num2);  // 99


function countdown(num) {
  // num = 4
  // recursive case
  if (num >= 1){
    console.log(num);
    num--;
    countdown(num);

    // CAREFUL WHICH ONE OF THESE YOU USE
    // countdown(num--);  // countdown(num--); MAX CALL STACK EXCEEDED
    // countdown(4)
    // countdown(num - 1); // 
    // countdown(--num); //perfectly fine
  } else {
    // base case
    console.log('done!');
  }
}

countdown(4);
