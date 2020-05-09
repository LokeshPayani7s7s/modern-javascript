let x = 7;

console.log("X value is ", x==7 || x===3 && x>10 ) // true
console.log("X value is ", x==7 ||( x===3 && x>10) ) // true


console.log("X value is ", (x==7 || x===3) && x>10 ) // false