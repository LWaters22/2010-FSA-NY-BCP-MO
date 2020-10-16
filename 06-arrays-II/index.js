


/*
Overview:
/*
- more array methods
- nested arrays
*/

// const names = ['Robb', 'Ned', 'Arya', 'Bran']

// // Splice methods
// // Mutate the original array? Yes
// // splice(begIdx, numToDelete, thingsToAdd)
// // returns an new array with all deleted items
// // any negative index is just the arr.length - idx


// let deletedItems = names.splice(1, 2, 'Sansa', 100, true);

// console.log('d', deletedItems);
// console.log('n', names)


// join
// Coerces array elements into a string, and divides them with passed in 'divider'
// Default divider is a ,

const food = ['carrot',5,'chips',true];

const foodString = food.join(', ')

// console.log(food)
// console.log(foodString)

// String.split turns string into array.
// places all elements
let str = 'Arya, Nedd, true, 7';

let namesArr = str.split(', ')
// console.log(str)
// console.log(namesArr)



// Array Concat
// Like a + operator for strings
// concat combines all passed in arrays in order and returns a new combined array.

// console.log('Hi ' + 'there ' + '!')

let lannister = ['Tyrion', 'Joffery', 'Cersei']
let veg = ['lettuce', 'radish'];
let fruit = ['apple', 'mango']

// let a = [1,3,4,6]
// let b = [4,6,7,10]
// let sorted = [1,3,4,4 ]

let combined = veg.concat(lannister, fruit);
// console.log(combined)
// console.log(lannister)
// console.log(veg)


const lunches = [
	'burger',
	['carrots','pb & j','chocMilk'],
	['dal','chickMahkni','saag'],
	['sushi','edamame', 'miso'] 
]


for(let i = 0; i < lunches.length; i++) {
	let currentLunch = lunches[i]
	// console.log(currentLunch)
	// console.log(j)
	if(Array.isArray(currentLunch)) {
		for(let j = 0; j < currentLunch.length; j++) {
			let currentCourse = currentLunch[j];
			// console.log(currentCourse);
			console.log(lunches[i][j])
		}
	} else {
		console.log(currentLunch)
	}
}



// let ticTacToe = [
// 	[0,0,5],
// 	[3,0,0],
// 	[0,4,0]
// ]

// console.log(ticTacToe[2][1])








/*
- more array methods
- nested arrays
*/

// ------------------------------------
// THIS IS THE SUDOKU PROJECT
// ------------------------------------

/*
100% optional
- Good practice building a slightly larger program
- Instructions available in extra workshop on LearnDot
- Don't forget to write tidy code!
- Send your solution to the instructors by the end of class next Thursday if you want feedback!
*/