/*

  - What is a method?
  - Creating, accessing, running a method
  - Introduction to this

*/


let dog = {
	name : 'Clifford',
	weight : 15,
	isGood : true,
	friends: ['Lassie', 'Benji', 'Otis'],
	add : function (num1, num2) {
		return num1 + num2
	},
	bark : function() {
		console.log(this.name + ' wants a treat!')
	}
}

dog['weight'] = 17;
dog.color = 'red';
// console.log(dog.add)
// console.log(dog.add(65, 5)
dog.name = 'Snoopy'
// dog.bark()

/// Object loop review: 
// for(let i = 0; i < arr.length; i++)
for(let key in dog) {
	console.log(key, dog[key])
	if() {
		// if true, do this
	} else {
		//do something else
	}
}






// 5 methods
// add, subtract, divide, mult, getValue


// let calculator = {
// 	value : 0,
// 	add : function(num){
// 		this.value += num;
// 	},
// 	getValue : function() {
// 		console.log(this.value);
// 	},
// 	subtract : function(num) {
// 		this.value -= num;
// 	}
// }

// calculator.getValue() // -> logs 0
// console.log(calculator)

// calculator.add(5) // logs nothing
// calculator.add(5)
// calculator.add(5)
// console.log(calculator)

// calculator.subtract(2) // logs nothing
// console.log(calculator)
// calculator.getValue() // logs 3





























console.log('   ')













