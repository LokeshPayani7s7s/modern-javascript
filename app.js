let loggedInUser;

if( !loggedInUser ){
  console.log('GET OUT OF HERE')
}


let flavor = 'grape';

if( flavor !== 'grape' && flavor !== 'cherry' ){
  console.log('Dont have that flavor')
}

if( !(flavor === 'grape' || flavor === 'cherry') ){
  console.log('Dont have that flavor!')
}