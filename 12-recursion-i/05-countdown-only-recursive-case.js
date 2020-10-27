/* 

every time we called countdown, we subtracted one from the previous num 

instead of manually calling countdown over and over, why not have countdown call itself, subtracting one from num each time? 


WARNING -> this will not run on the visualizer
and will cause repl.it to error
https://goo.gl/uaGva6

*/
function countdown(num) {
  console.log(num);
  countdown(num - 1);
}

countdown(5);
// countdown(4);
// countdown(3);
// countdown(2);
// countdown(1);
// countdown(0);
// countdown(-1);
// countdown(-2);



/** 
 * 
 * that started off so promising! What happened here??
*/


/*
   This is very similar to the way our loops somehow have to end!
  For example: 

  const countdown = (num) => {
    while (true) {
      console.log(num);
      num--;
    }
  }

  The above code will run forever since it has no stop condition. We have to tell the code when we want it to stop,
  both in our loops and in recursion.

  So then how do we tell our code to stop? When do we tell the code to stop?

  Let's rewrite our while loop to at some point end.

  const countdown = (num) => {

    while (true) {
      console.log(num);
      num--;
      // this is our stop condition, when we're telling the code to stop the looping
      if (num <= 0) {
        break;
      }
    }
  }

  Another way we can write this is: 

  const countdown = (num) => {
    // this is the condition under which we continue
    while (num > 0) {
      console.log(num);
      num--;
    }
  }

*/


/** 
 * 
 * So we see how to do this with loop. Now how does this translate over to recursion???
 * 
*/