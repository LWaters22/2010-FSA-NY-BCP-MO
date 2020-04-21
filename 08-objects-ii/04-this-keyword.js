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
// pusheen.greet('Adam');
// pusheen.greet('Diana');


/** 
 * what happens when we change things on pusheen??
*/
// pusheen.age++;
// pusheen.age++;
// pusheen.name = "Pusheen the Great"
// console.log(JSON.stringify(pusheen, null, 2))
// pusheen.greet('Adam');
// pusheen.greet('Diana');


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


// pusheenTheThird.greet('Jeff');
// pusheenTheThird.age++;
// pusheenTheThird.age++;
// pusheenTheThird.name = "Pusheen the Great";
// console.log(JSON.stringify(pusheenTheThird, null, 2));
// // console.log(pusheenTheThird);
// pusheenTheThird.greet('Jeff');

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
//   getBirthYear: function(currentYear){
//     return currentYear - this.age;
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


// pusheenTheThird.greet('Matt');
// pusheenTheThird.arrowMethod('Jeff');



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

// let pip = {
//   name: 'Pip',
//   color: 'Orange',
// }

// const obj1 = { a : 'b'};
// const obj2 = { a : 'b'};

// console.log(obj1 === obj2);

// const returnedVal = pusheen.getThis();
// console.log(returnedVal === pusheen);

// // adding a new method
// pusheen.levelUp = function(levels = 1){
//   this.level += levels
//   if (this.level > 25){
//     this.name = 'Pusheen the Great'
//   }

//   if (this.level < 10) {
//     this.name = 'Pusheen'
//   }
// }

// pusheen.levelUp(10);

// console.log(pusheen); // 11

// pusheen.levelUp(15); // 26

// console.log(pusheen); // 

let pusheen = {
  name: 'Pusheen',
  age: 7,
  color: 'gray and tabby',
  level: 1,
  isHappy: true,
  greet: function(name){
    console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
  },
  birthYear: function(currentYear){
    // how can we change this method to use the `this` keyword??
  },
  getThis: function(){
    // pusheen
    return this;
  }
};

let pip = {
  name: 'Pip',
  color: 'Orange',
}

// pip.sayHello = pusheen.greet;
pip.greet = function(name){
  console.log(`Hello ${name}, I am ${this.name} the ${this.color} cat.`);
}

console.log(pip)

pip.greet('Jason');
