// Fuction scope

// //These variables are SCOPED to the function
// function lol() {
//   let person = 'Tom';
//   const age = 45;
//   var color = 'teal';
//   console.log(age);
// }
// // These variables are SCOPED to changeColor()
// function changeColor() {
//   let color = 'purple';
//   const age = 19;
//   console.log(age);
// }
// lol();
// changeColor();
// age; //DOES NOT EXIST!
// color; //DOES NOT EXIST!
// person; //DOES NOT EXIST!


// let bird = 'mandarin duck';

// function birdWatch() {
//   //this bird is scoped to birdWatch()
//   let bird = 'golden pheasant';
//   console.log(bird); //"golden pheasant"
// }
// birdWatch();
// console.log(bird); //"mandarin duck"


//---------------------------------------------------------

// Block scope

// let & const are BLOCK SCOPED
if (true) {
  const animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //NOT DEFINED!

// VAR IS NOT BLOCK SCOPED
if (true) {
  var animal = 'eel';
  console.log(animal); //'eel'
}
console.log(animal); //'eel'

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i)


// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// let i = 10;
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
// console.log(i) 


function doubleArr(arr) {
  const result = []; //scoped to the doubleArr function
  for (let num of arr) {
    let double = num * 2; //scoped to this loop
    result.push(double);
  }
  return result;
}

//---------------------------------------------------------

// Lexical Function

function outer() {
  let movie = 'Amadeus';

  function inner() {
    // let movie = "The Shining";

    function extraInner() {
      //movie is not defined in this function
      //but it has access to parent function's variables
      console.log(movie.toUpperCase())
    }
    extraInner();
  }
  inner();
}

outer(); //'AMADEUS'

//---------------------------------------------------------

// Function expressions

// Function Statement
function add(x, y) {
  return x + y;
}

// Function Expression (Anonymous)
const sum = function (x, y) {
  return x + y;
}

// Function Expression (Named)
const product = function multiply(x, y) {
  return x * y;
}
//---------------------------------------------------------

// Higher Order function
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}

// We can also store functions in objects!
const thing = {
  doSomething: multiply
}
thing.doSomething(4, 5) //20


//---------------------------------------------------------

// Function as arguments
// This function accepts another function as an argument
function callThreeTimes(f) {
  //And calls it 3 times:
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  // call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);

// Accepts 2 functions as arguments
// Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
//---------------------------------------------------------

//---------------------------------------------------------

//---------------------------------------------------------

//---------------------------------------------------------

//---------------------------------------------------------

//---------------------------------------------------------

//---------------------------------------------------------

<<<<<<< HEAD
//---------------------------------------------------------

//---------------------------------------------------------
=======
console.log(avg([0,50]));
console.log(avg([75,76,80,95,100]));
//_________________________________________________________________

// Excercise: 3
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false


// Version using indexOf
// function isPangram(sentence) {
// 	let lowerCased = sentence.toLowerCase();
// 	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
// 		if (lowerCased.indexOf(char) === -1) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// Version using string.includes()
// Nice and clean, but not supported in IE
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}

console.log(isPangram('The five boxing wizards jump quickly'))// true
console.log(isPangram('The five boxing wizards jump quickLY'))// true
console.log(isPangram('The five boxing wizards jump quick')) // false
//_________________________________________________________________

// Excerise: 4
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object


// function getCard(){
// 	const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
// 	const valueIndex=Math.floor(Math.random() * values.length);
// 	// return idx;// it will return index
// 	const value =  values[valueIndex]; // it will return value

// 	const suits = ['clubs','spades', 'hearts', 'diamonds'];
// 	const suiteIndex = Math.floor(Math.random()* suits.length)
// 	const suite = suits[suiteIndex];
// 	// console.log(value, suite)
// 	return {value:value, suites:suite};
// }
// console.log("Card is", getCard())


// function getCard() {
// 	const values = [
// 		'1',
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A'
// 	];
// 	const valIdx = Math.floor(Math.random() * values.length);
// 	const value = values[valIdx];

// 	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
// 	const suitIdx = Math.floor(Math.random() * suits.length);
// 	const suit = suits[suitIdx];
// 	return { value: value, suit: suit };
// }

function pick(arr) {
	//return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}

//_________________________________________________________________
>>>>>>> 285af3d0a2d5b4405a8a89c11a5b829bdbf82947
