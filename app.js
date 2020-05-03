
// Performance Review
// 3 - Superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf ?

let rating = 4;

if(rating === 3) {
  console.log('YOU ARE A SUPERSTAR');
}else if( rating === 2) {
  console.log("MEETS EXPECTATIONS");
}else if( rating === 1) {
  console.log(" NEEDS IMPROVEMENT");
}else {
  console.log("INVALID RATING")
}


// Example 2

let highScore = 1430;
let userScore = 1600;

if(userScore >= highScore){
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore= userScore;
}else {
  console.log(`Good game, your score is ${userScore} is did not beet the high score of ${highScore}`)
}