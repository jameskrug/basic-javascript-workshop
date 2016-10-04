/*//a one line comment
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

function multiplyTwoNumbers(num1, num2) {
    var x = num1 * num2;
    console.log(x);
}

multiplyTwoNumbers(23,6);
//if you give a number and a string, the function returns an NaN
multiplyTwoNumbers(8,"joe");


function simpleMath(num1, num2, str) {
    var x = 0;
    if (str === "add"){
        x = num1+num2;
    }
    else if (str === "subtract"){
        x = num1-num2;
    }
    else if (str === "mult"){
        x = num1*num2;
    }
    else if (str === "div"){
        x = num1/num2;
    }
    console.log(x);
}

simpleMath(4,8,"add");
simpleMath(10,4,"subtract");
simpleMath(4,6,"mult");
simpleMath(8,4,"div");
simpleMath(10,11,"jibberish");


function stringRepeater(str, num){
    var repeatedString = "";
    for (var i = 1; i <= num; i++){
        repeatedString = repeatedString+str;
    }
    console.log(repeatedString);
}

stringRepeater("Hello", 8);


function stringReverser(str){
    var reverseString = "";
    for (var i = 0; i < str.length + 1; i ++){
        reverseString = reverseString + str.charAt(str.length - i);
    }
    console.log(reverseString);
}

stringReverser("forwards then backwards");


function factorialCalc(num){
    var x = 1;
    for (var i = 1; i <= num; i ++){
        x *= i;
    }
    console.log(x);
}

factorialCalc(0);
factorialCalc(5);


function longestWord(str){
    var thisWord = "";
    var theLongest = "";
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == " "){
            if (thisWord.length > theLongest.length){
                theLongest = thisWord;
            }
            thisWord = "";
        }
        else{
            thisWord = thisWord + str.charAt(i);    
        }
    }
    console.log(theLongest);
}

longestWord("a bc def ghij klmno pqr stu vwxyz");



function properCaps(str){
    var capsStr = "";
    for (var i = 0; i < str.length; i++){
        if ((i == 0) || (str.charAt(i-1) == " ")){
            capsStr = capsStr + str.charAt(i).toUpperCase();
        }
        else{
            capsStr = capsStr + str.charAt(i).toLowerCase();
        }
    }
    console.log(capsStr);
}

properCaps("hELlo tHere HoW goES it?");


function largestInArray(theArray){
    var x = 0;
    for(var i = 1; i <= theArray.length; i++){
        if (theArray[i] > x) {
            x = theArray[i];
        }
    }
    console.log(x);
}

largestInArray([23,42,32,1,101]);


 function biggerThanFive(x){
        return x > 5;
    }

function onlyTruthys(theArray){
    var filteredArray = []
   
    filteredArray = theArray.filter(biggerThanFive);
    console.log(filteredArray);
    
}

onlyTruthys([1,2,3,4,5,6,7,8,9,10,21,2,3,55,44]);

*/

function arrayAdder(theArray){
    var x = 0;
    for (var i = 0; i < theArray.length; i ++){
        x += theArray[i];
        console.log(theArray[i]);
    }
    console.log(x);
}

arrayAdder([1,2,3,4,5,5,6,7,4,4,5]);