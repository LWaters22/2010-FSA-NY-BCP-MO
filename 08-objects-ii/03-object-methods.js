/* 
  methods on an object generally should perform an action that's relevant to the idea or concept represented by the object itself
*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(){
//     console.log("Hello I am Pusheen the cat.");
//   }
// };

// pusheen.greet();


/* 
  other methods
*/


let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  isHappy: true,
  greet: function(){
    console.log('Hello I am pusheen the cat.');
  },
  getBirthYear: function(currentYear){
    return currentYear - 7;
  },

  personalGreet: function(name = 'Sam') {
    console.log(`Hello ${name}! I am Pusheen.`);
  },

  sayAge: function(){
    console.log('I am 7 years old.');
  }
};

/*
let's try out other methods!
*/
console.log(pusheen.getBirthYear(2020));
pusheen.personalGreet('Sula');

pusheen.sayAge();

/** 
 * important: since methods are just functions, anything that was possible with a function is possible with 
 * a method
*/
