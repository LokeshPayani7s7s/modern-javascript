
let letters = ['T','C','A','C','G','L','M'];
console.log(letters.reverse()) // ["M", "L", "G", "C", "A", "C", "T"]

let numbers = [1,2,3,4,5,6];
console.log(numbers.reverse()); // [6, 5, 4, 3, 2, 1]

console.log(letters.join()) // M,L,G,C,A,C,T
console.log(letters.join('-')) // M-L-G-C-A-C-T
console.log(letters.reverse().join('.')) // T.C.A.C.G.L.M
console.log(letters.join('$'))// T$C$A$C$G$L$M
