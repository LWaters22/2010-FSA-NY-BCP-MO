// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am Pusheen the gray and tabby cat. I am 7.`);
//     // console.log("Hello " + name + " , I am Pusheen the gray and tabby cat. I am 7.");

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };

/** 
 * let try out our method!
*/
// pusheen.greet("Liz");
// pusheen.greet("Paige");


/** 
 * what happens when we change things on pusheen??
*/
// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"
// console.log(JSON.stringify(pusheen, null, 2))
// pusheen.greet("Liz");
// pusheen.greet("Paige");


/** 
 * our values change but our method doesn't reflect that! 
 * how do we get our method to reflect our changes??
*/
// let pusheenTheThird = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${pusheenTheThird.name} the ${pusheenTheThird.color} cat. I am ${pusheenTheThird.age}.`);

//   },
//   birthYear: function(currentYear){
//     return currentYear - 7;
//   }
// };


// pusheenTheThird.greet("Liz");
// pusheenTheThird.age++;
// pusheenTheThird.age++;
// pusheenTheThird.name = "Pusheen the Great";
// console.log(JSON.stringify(pusheenTheThird, null, 2));
// console.log(JSON.stringify(pusheenTheThird, null, 2));
// console.log(pusheenTheThird);
// pusheenTheThird.greet("Liz");
// pusheenTheThird.greet("Paige");

/** 
 * that works but having to type out `pusheenTheThird` each time is time consuming and long
 * is there another way?
 * 
 * `this` to the rescue!
*/
// let pusheenTheThird = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age + ".");
//   },
//   birthYear: function(currentYear){
//     return currentYear - this.age; // 2019 - 7 = 2012
//   },
//   arrowMethod: (name) => {
//     // this != pusheen;
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat. I am ${this.age}`);
//     // console.log("Hello " + name + " I am " + this.name + " the " + this.color + " cat. I am " + this.age);
//   },
//   getThis: function() {
//     return this;
//   }

// };

/*

this keyword

`this` isn't a copy of pusheen. It's literally pusheen

*/


// let pusheen = {
//   name: 'Pusheen',
//   age: 7,
//   color: 'gray and tabby',
//   level: 1,
//   isHappy: true,
//   greet: function(name){
//     console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
//   },
//   birthYear: function(currentYear){
//     // how can we change this method to use the `this` keyword??
//   },
//   getThis: function(){
//     // pusheen
//     return this;
//   }
// };
