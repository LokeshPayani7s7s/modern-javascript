let password = "CheckenGel";

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log('Vaild Password');
}else {
    console.log('Invalid Password');
}


let num = "6";

if( num >= 1 && num <= 10 ){
    console.log('Number is between 1 and 10');
}else {
    console.log('Please guess the number between 1 to 10');
}