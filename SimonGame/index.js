// press any key to start (flash wrong until key press)  ---DONE---
// key pressed = title change  ---DONE---
// random flash generated   ---DONE---
// append array             ---DONE---
// validate each flash 
// show output 
// append array/ clear array
// update level/ back to start

/////////////////////initializing
console.log("initializing");
var gameOngoing = false;
var flashList = [];
var userList = [];
var round=0;

////////////////////before game starts

$(".btn").on("click",function (event) {
    // console.log(event.target.id);
    if (gameOngoing == false){
    console.log("game not started yet");
    flashColour(event.target.id);
    playAudio("wrong");
    }
    else{
        console.log(event.target.id + " button pressed");
        buttonPress(event.target.id);
        validatePattern(event.target.id);
    }
    // console.log("game ongoing");

});

$(document).on("keydown", function(event){
    if (gameOngoing == false){
        // console.log("game started");
        $("h1").text("Simon Game");
        gameOngoing = true;
        clearList(userList)
        clearList(flashList)
        // round = round +1;
        console.log("round="+round);
        startGame()
    }
});


///////////////////////////////helper functions

function randomFlashGeneration(){
    // console.log("random flash");
    var colourList = ["red", "blue", "green", "yellow"]
    var gen = Math.floor(Math.random()*4);
    // setTimeout(buttonPress(colourList[gen]),1000000);
    buttonPress(colourList[gen]);
    flashList.push(colourList[gen]);
    console.log("random flash, flashList="+flashList);
    round = round + 1;

}

function buttonPress(targetButtonId){
        flashColour(targetButtonId);
        playAudio(targetButtonId);
}

function flashColour(btnId) {
    $("#"+btnId).addClass("pressed");
    setTimeout(
        function(){
        $("#"+btnId).removeClass("pressed");   
    },100);
}

function playAudio(colourName) {
    
    switch (colourName) {
        case "red":
            var audio = new Audio("sounds/red.mp3");
            break;

        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            break;
            
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            break;

        case "green":
            var audio = new Audio("sounds/green.mp3");
            break;

        default:
            var audio = new Audio("sounds/wrong.mp3");
            break;
    }
    audio.play();
}

function clearList(listName) {

    while(listName.length!=0){
        listName.pop();
    }
    
    // for (var j = 0; j<listName.length; j++ ){
    //     listName.pop();
    // }
    // console.log("emptying "+ listName +"=" + listName.length)
}


////////////////////////////after game starts

function startGame(){
    console.log("start function");
    randomFlashGeneration();

}

function gameOver(){
    console.log("pattern not correct, end game");
    $("body").addClass("gameOver");
    setTimeout(
        function(){
        $("body").removeClass("gameOver");   
    },100);
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    gameOngoing = false;
    clearList(flashList);
    clearList(userList);
    round = 0;
    $("h1").text("Press a Key to Start");
}

function validatePattern(colourPressed){

    console.log("validating button press for round "+ round);
    userList.push(colourPressed);
    console.log("userList="+userList);
    console.log("flashList="+flashList);
    // console.log("i="+i);
    //append to userList, increase i
    for(var i = 0; i<userList.length; i++){
        if(userList[i]!=flashList[i]){
            gameOver()
            break;
        }
    }

    if(userList.length==flashList.length){
        console.log("level passed, next level");
        // round = round + 1;
        clearList(userList);
        console.log("rounds="+round);
        // setTimeout(randomFlashGeneration(), 3000)
        randomFlashGeneration()
    }
        //if wrong break
    //if i == len of flashList then call random flash gen
}

