let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]



let animals = ['shark', 'salmon', 'whale', 'bear','lizard', 'tortoise'];

//to add an item
animals.splice(1,0, 'octopus')
console.log("animals", animals) //["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]
//to delete an item
animals.splice(3,1)
console.log("animals", animals) //["shark", "octopus", "salmon", "bear", "lizard", "tortoise"]
// to update to uppercase
animals.splice(0,2, 'SHARK','OCTOPUS')
console.log("animals", animals)


let numbers = [10,20,30,40,50,60];

//to add an item
numbers.splice(1,0, 10,20)
console.log("numbers", numbers)//[10, 10, 20, 20, 30, 40, 50, 60]

//to delete an item
numbers.splice(4,2);
console.log("numbers", numbers)//[10, 10, 20, 20, 50, 60]