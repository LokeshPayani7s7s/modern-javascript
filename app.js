let dishesToDo =['big platter','large platter', 'small platter'];
console.log(dishesToDo);//["big platter", "large platter", "small platter"]


// unshift adds the element at the start
dishesToDo.unshift('123')
console.log(dishesToDo);//["123", "big platter", "large platter", "small platter"]

//shift emoves the element at front
dishesToDo.shift();
console.log(dishesToDo); //["big platter", "large platter", "small platter"]
