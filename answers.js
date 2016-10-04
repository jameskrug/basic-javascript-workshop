//a one line comment
function firstLetter(str) {
    var x = str.charAt(0);
    console.log(x);
}

firstLetter("loud noises");


function lastLetter(str) {
    var x = str.charAt(str.length - 1);
    console.log(x);
}

lastLetter("pumpkin");


function letterPosition(str, num){
    var x = str.charAt(num);
    console.log(x);
}

letterPosition("we three kings", 0);

function addTwoNumbers(num1,num2){
    var x = num1 + num2;
    console.log(x);
}

addTwoNumbers(10,3);

//if you give the function a string instead of a number, it will turn the other input into a string as well.  
addTwoNumbers(4,"joe");

//Otherwise it will give a syntax error
//addTwoNumbers(3,$);



