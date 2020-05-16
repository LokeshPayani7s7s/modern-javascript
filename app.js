let animals = [ 'shark', 'salmon','whale','bear', 'lizard','tortoise'];

// it will display 0 to 3 values
let swimers = animals.slice(0, 3);
console.log(swimers); //["shark", "salmon", "whale"]

// it will display 3 to 6
let mammals = animals.slice(3, 6);
console.log(mammals); // ["bear", "lizard", "tortoise"]

//let reptiles= animals.slice(4, 6);
//console.log(reptiles); //["lizard", "tortoise"]


// from index 4 onwards it will display
let reptiles= animals.slice(4);
console.log(reptiles);//["lizard", "tortoise"]

// it displays a last 4 
let quadruped= animals.slice(-4);
console.log(quadruped);//["whale", "bear", "lizard", "tortoise"]