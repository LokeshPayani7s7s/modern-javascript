
let shoppingList = ['cereal', 'cheese', 'ice'];
console.log(shoppingList);

let lotto = [45,23,25,66];
console.log(lotto);

let myCollection = [null, true, undefined, 'ice', 23, NaN]
console.log(myCollection);


//ARRAY INDEXED

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'voilet'];
console.log("Length of Array", colors.length);
console.log("index of first array", colors[0]);
console.log("index of second array", colors[1]);
console.log("index of third array", colors[2]);
console.log("index of fourth array", colors[3]);
console.log("index of fifth array", colors[4]);
console.log("index of sixth array", colors[5]);
console.log("index of seven array", colors[6]);
console.log("index of last one", colors[colors.length-1]);


// Strings are immutable(unchangable) in javascript

let laugh= 'haha';
console.log("index of first", laugh[0])// h
console.log("Try to update", laugh[0]= "H") //Expected Haha
console.log("After update", laugh) // haha


// Arrays are mutable(changable)

let listData = ["green", 'yellow'];
console.log("datalist", listData);
console.log("updating array", listData[1]="blue", listData);
console.log("adding array", listData[2]="voilet", listData);
console.log("if we dont know index value of array", listData[listData.length]="red", listData);

