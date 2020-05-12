let topSongs = [
  'First Time Ever I Saw YOur Face',
  'God Only Knows',
  'A Day In The Life',
  'Life On Mars'
];

// this will add the item at end
topSongs[topSongs.length]='123'
console.log(topSongs);

// Will add the item at the end
topSongs.push('Fortunate Song');
console.log("Push =>>>>",topSongs);

// Will remove the item at end
let result=topSongs.pop();
console.log(result);
