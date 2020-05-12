let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
];

//includes finds the value
console.log(ingredients.includes('fish')) // false
console.log(ingredients.includes('shrimp')) //true
console.log(ingredients.includes('water', 3)) // false
console.log(ingredients.includes('water', 0))// true

if(ingredients.includes('flour')){
  console.log('I AM GLUTEN FREE, I CANNOT EAT THAT');
}

//indexOf()
console.log(ingredients.indexOf('fish')) // -1 false
console.log(ingredients.indexOf('shrimp')) // 5 true
console.log(ingredients.indexOf('water', 3)) // -1 false
console.log(ingredients.indexOf('water', 0))// 0 true
