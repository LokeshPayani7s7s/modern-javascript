let fruits = ['apple', 'bannana'];
let veggies = ['asparagus', 'brussel sprouts'];
let meet = ['steak', 'chicken breast'];


console.log(fruits.concat(veggies));  // ["apple", "bannana", "asparagus", "brussel sprouts"]
console.log(veggies.concat(fruits));  // ["asparagus", "brussel sprouts", "apple", "bannana"]
console.log(veggies.concat(fruits, meet)); //  ["asparagus", "brussel sprouts", "apple", "bannana", "steak", "chicken breast"]
