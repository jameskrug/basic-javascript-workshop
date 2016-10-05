

function theCowSays(str){
    //fill blank space at end with " "
    console.log(str.length);
    var allChars = str.split("");
    var lines = str.length / 30;
    console.log(lines);
    
    for (var y = 0; y < lines; y++){
        var lookForSpaces = "";
        var z = 29;
        while (lookForSpaces != " "){
            lookForSpaces = allChars[z+(y*30)];
            z--;
        }
        var addSpaces = (28)-z;
        for(var a = 0; a < addSpaces; a++){
            allChars.splice((z+1+(y*30)), 0, " ");
        }
    }
    lines = (allChars.length / 30) + 1;
    console.log(lines);
    var strUnder = "";
    var underscores = 30;
    if (lines < 2){
        underscores = str.length;    
    }
    for (var i = 1;  i <= underscores; i++){
        strUnder = strUnder + "_";
    }
    console.log("  " + strUnder);
   
    var typeLine = [""];
    
    if (allChars.length > 30){
        var leftOver = str.length % 30;
        leftOver = 30 - leftOver;
        for (var l = 0; l < leftOver; l++){
            str = str + " ";
        }
    }
   
    for(var j = 0; j <= lines; j++){
        for (var k = 0; k < 30; k++){
            if (k == 0){
                typeLine[j] = "";
            }
            typeLine[j] = typeLine[j] + allChars[k+(j*30)];
        }
    }
    
    if (lines < 2){
        console.log("<" + str + ">");
    }
    else{
        console.log("/ " + typeLine[0] + " \\")
        for(var n = 1; n < lines-1; n ++){
            console.log("| " + typeLine[n] + " |");
        }
        console.log("\\ " + typeLine[lines-1] + " /");    
        
    }
    /*
    
   
    if (lines >= 2){
        console.log("/ " + typeLine[0] + " \\");
    }
    
    
    */
    
    
    //Dashes on bottom
    var strDash = "";
    var dashes = 30;
        if (lines < 2){
            dashes = str.length;
        }
        
    for (var i = 1;  i <= dashes; i++){
        strDash = strDash + "-";
    }
    console.log("  "+strDash);
    
    return " "
}


theCowSays("words are pointless at this point so why not just keep saying things in that we can access further into the depths of this programming genius and stuff with things");