const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock'],
  ['loki', ['lokesh','payani']]
]

// to access the array values

console.log(animalPairs[0]); // ["doe", "buck"]
console.log(animalPairs[0][0]);// doe
console.log(animalPairs[0][1]);// buck


console.log(animalPairs[1]); //  ['ewe', 'ram']
console.log(animalPairs[1][0]); // ewe
console.log(animalPairs[1][1]); // ram


console.log(animalPairs[2]); // ['peahen', 'peacock']
console.log(animalPairs[2][0]); // peahen
console.log(animalPairs[2][1]); // peacock

console.log(animalPairs[3]); // ["loki", Array(2)]
console.log(animalPairs[3][0]); // loki
console.log(animalPairs[3][1]); // ["lokesh", "payani"]

// to Update

console.log(animalPairs[0]); // ["doe", "buck"]
console.log(animalPairs[0][0] = 'stag');// stag
console.log(animalPairs[0]); // ["stag", "buck"]
