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