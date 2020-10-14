// SCOPE SCOPE SCOPE!!

// Tinted Doggie Limo
	// You can look out, but you can't look in!


// Scope is where you can access variables in your code.

// Global Scope
// Any variable described outside of a function


// let globalDog = 'Woody';

// console.log(globalDog);

// function logSomething(){
// 	console.log(globalDog)
// }



// Functional Scope
// Variable can be accessed in functional scope.
// Temporal Dead Zone. Bad SciFi or weird JS?
// let name3 = 'Jeremy';

// function logAnotherThing() { // limo
// 	let coolName = 'Russell';
// 	let name2 = 'what?';
	
// 	function anotherLogger(name) { // functional 
// 		// like we're saying...
// 		// let name = the argument we just passed to this function. 
	
// 		name = 'parent override?'
// 		console.log(name, name2, name3);
// 	}
// 	anotherLogger('Isa');
// 	// console.log('********', name)
// }

// function logAThirdThing(){
// 	console.log(name)
// }

// logAnotherThing();



function anyFunc(num, str, anything) {
	console.log(locallyScoped)
	{
		let secret = 'shhhh';
	}	
	console.log(secret)
}



anyFunc('Nice to be in the limo');



































