// creating an object

// totalSteps  -> 308727,
// totalMiles  -> 211.7,
// avgCalorieBurn -> 5755,
// workoutsThisWeek -> '5 of 7',
// avgGoodSleep   -> '2:13's

const fitBitData = {
	totalSteps       : 308727,
	totalMiles       : 211.7,
	avgCalorieBurn   : 5755,
	workoutsThisWeek : '5 of 7',
	avgGoodSleep     : '2:13'
};



console.log("Objects =>>",fitBitData) 

const palette = {
	red    : '#eb4d4b',
	yellow : '#f9ca24',
	blue   : '#30336b'
};

//DOT NOTATION
console.log("palette.red",palette.red); //'#eb4d4b'

//SQUARE BRACKET NOTATION
console.log("palette['yellow']",palette['yellow']);
palette['yellow']; //'#f9ca24'

//With square brackets, we can also use dynamic key names:

let mysteryColor = 'blue';
console.log("palette[mysteryColor]",palette[mysteryColor]);
palette[mysteryColor]; //'#30336b'



//Updating/Adding Objects
const userReviews = {};

//Adding a new property:
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

//Updating existing properties
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;


//Nested Arrays and Objects

const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};
console.log("student.strengths",student.strengths[1])
const avg = (student.exams.midterm + student.exams.final) / 2;
console.log("Ags",avg)

const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

const game = {
	player1 : {
		username  : 'Blue',
		playingAs : 'X'
	},
	player2 : {
		username  : 'Muffins',
		playingAs : 'O'
	},
	board   : [ [ 'O', null, 'X' ], [ 'X', 'O', 'X' ], [ null, 'O', 'X' ] ]
};


// const palette = {
// 	red    : '#eb4d4b',
// 	yellow : '#f9ca24',
// 	blue   : '#30336b'
// };
// //Objects & Arrays are reference types
// const palette2 = palette;
// //If we change one value...
// palette2.green = '#ebf876';

// //Both variables reflect that change...
// palette.green; //"#ebf876"
// palette2.green; //"#ebf876"



// Arrays & Objects are refence types and their equality
let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
	username      : 'CherryGarcia8',
	email         : 'garcia@gmail.com',
	notifications : [ 'message', 'alert' ]
};

//THIS WILL NOT WORK!
if (user.notifications === []) {
	console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
	console.log('NO NEW NOTIFICATIONS!');
}
