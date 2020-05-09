let password = "Hell";

if(password.length >= 6){
  if(password.indexOf(' ') === -1){
    console.log('Valid Password!');
  }else{
    console.log('Password is long enough, but cannot contain space');
  }
}else {
  console.log('Password must be long!');
}