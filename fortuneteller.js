function randomQuote(num){
    console.log("You got random quote number: " + num);
    if (num ==1){
        console.log("hey whats up?");
    }
    else if (num == 2){
        console.log("are you tired?");
    }
    else if (num == 3){
        console.log("whos over there?");
    }
    else if (num == 4){
        console.log("the quick brown fox");
    }
    else if (num == 5){
        console.log("jumped over");
    }
    else if (num == 6){
        console.log("the lazy dogs");
    }
    else if (num == 7){
        console.log("orange purple banana");
    }
    else if (num == 8){
        console.log("tim chris whatever");
    }
    else if (num == 9){
        console.log("madam im adam");
    }
    else {
        console.log("congrats on the highest number");
    }
}

    randomQuote(Math.floor(Math.random() * 10 + 1));    

