let num = 7;


// IF condition
if( num === 7) {
  console.log('LUCKY');
}else {
  console.log('BAD');
}

// Ternery Operator

num === 7 ? console.log('LUCKY') : console.log('BAD');


let status= 'offline';

// let color;
// if( status === 'offline') {
//   color='red'
// }else {
//   color='green'
// }

let color = status === 'online' ? "red" : "green";
console.log(color);